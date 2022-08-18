import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
    debounceTime,
    delay,
    filter,
    finalize,
    map,
    Observable,
    retry,
    startWith,
    Subscription,
} from 'rxjs';

import { LeituraPosicao } from './model/leitura-posicao';
import { Poi } from './model/poi';

import { PoiService } from './services/poi.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    private _subscription: Subscription = new Subscription();
    private _map: google.maps.Map;

    public formFiltro: FormGroup;

    public loading = false;
    public pois: Poi[] = [];
    public placas: string[] = [];
    public leituraPosicao: LeituraPosicao[] = [];

    constructor(
        private _fb: FormBuilder,
        private _snackBar: MatSnackBar,
        private _poiService: PoiService
    ) {}

    ngOnInit(): void {
        this._initializeMap();
        this._criarFormFiltro();
        this._implementEvents();
        this._carregarDados();
    }

    private _initializeMap() {
        let startPoint = { lat: -25.43615638835874, lng: -49.2589101856207 };

        this._map = new google.maps.Map(
            document.querySelector('#map') as HTMLElement,
            {
                center: startPoint,
                zoom: 15,
            }
        );
    }

    private _criarFormFiltro() {
        this.formFiltro = this._fb.group({
            poi: [null],
            placa: [null],
            dataLeitura: [null],
        });
    }

    private _implementEvents() {}

    private _carregarDados() {
        this.loading = true;

        this._subscription.add(
            this._poiService
                .getPois()
                .pipe(retry(3))
                .subscribe({
                    next: (pois: Poi[]) => {
                        this.pois = pois;
                    },
                    error: e => {
                        console.log(e);
                        this.exibirMensagemErro(e);
                    },
                })
        );

        this._subscription.add(
            this._poiService
                .getPlacas()
                .pipe(retry(3))
                .subscribe({
                    next: (placas: string[]) => {
                        this.placas = placas;
                    },
                    error: e => {
                        this.exibirMensagemErro(e);
                    },
                })
        );

        this._subscription.add(
            this._poiService
                .getLeituraPosicao()
                .pipe(
                    retry(3),
                    finalize(() => {
                        this.loading = false;
                    })
                )
                .subscribe({
                    next: (leituraPosicao: LeituraPosicao[]) => {
                        this.leituraPosicao = leituraPosicao;
                    },
                    error: e => {
                        this.exibirMensagemErro(e);
                    },
                })
        );
    }

    private _exibirMensagem(mensagem: string) {
        this._snackBar.open(mensagem, 'OK', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 2000,
        });
    }

    public exibirMensagemErro(error: HttpErrorResponse) {
        const detalhesError = `(Status: ${error.status}. ${
            error.message ? ` Detalhes: ${error.message}` : ''
        })`;
        const message = `🌧 Ops! Algo deu errado. Por favor, tente novamente mais tarde. ${detalhesError}`;

        this._snackBar.open(message, 'OK', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 10000,
        });
    }

    public redefinirFiltros() {
        this.formFiltro.reset();
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }
}
