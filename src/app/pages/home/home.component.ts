import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
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
import { CustomDateAdapter } from 'src/app/shared/custom-date-adapter';
import { FilterForm } from './model/filtro-form';

import { LeituraPosicao } from './model/leitura-posicao';
import { Poi } from './model/poi';
import { GMapService } from './services/gmap.service';

import { PoiService } from './services/poi.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [{ provide: DateAdapter, useClass: CustomDateAdapter }],
})
export class HomeComponent implements OnInit, OnDestroy {
    private _subscription: Subscription = new Subscription();
    private _map: google.maps.Map;

    private _circle: google.maps.Circle;

    public formFiltro: FormGroup;

    public loading = false;
    public pois: Poi[] = [];
    public placas: string[] = [];
    public leituraPosicao: LeituraPosicao[] = [];

    constructor(
        private _fb: FormBuilder,
        private _snackBar: MatSnackBar,
        private _gMapService: GMapService,
        private _poiService: PoiService,
        private _dateAdapter: DateAdapter<Date>
    ) {
        this._dateAdapter.setLocale('pt-BR');
    }

    ngOnInit(): void {
        this._initializeMap();
        this._criarFormFiltro();
        this._implementEvents();
        this._carregarDados();
    }

    private _initializeMap() {
        this._gMapService._initializeMap(
            document.querySelector('#map') as HTMLElement
        );
    }

    private _criarFormFiltro() {
        this.formFiltro = this._fb.group({
            poi: [null],
            placa: [null],
            dataLeitura: [null],
        });
    }

    private _implementEvents() {
        this.formFiltro.get('poi').valueChanges.subscribe({
            next: (selectedPoi: Poi) => {
                const center = {
                    lat: selectedPoi.latitude,
                    lng: selectedPoi.longitude,
                };
                this._gMapService.setMapcenter(center);
                this._gMapService.createCircle(selectedPoi.raio);
            },
        });
    }

    private get _filtroForm(): FilterForm {
        const poi = this.formFiltro.get('poi').value;
        const placa = this.formFiltro.get('placa').value;
        let dataLeitura = this.formFiltro.get('dataLeitura').value;

        dataLeitura = dataLeitura
            ? formatDate(dataLeitura, 'MM/dd/yyyy', 'en')
            : dataLeitura;

        const objFiltro: FilterForm = {
            poi: poi,
            placa: placa,
            dataLeitura: dataLeitura,
        };

        return objFiltro;
    }

    private _carregarLeituraPosicao() {
        this.loading = true;

        this._subscription.add(
            this._poiService
                .getLeituraPosicao(this._filtroForm)
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

        this._carregarLeituraPosicao();
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

    public visualizarPois() {
        this._carregarLeituraPosicao();
    }

    public redefinirFiltros() {
        this.formFiltro.reset();
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }
}
