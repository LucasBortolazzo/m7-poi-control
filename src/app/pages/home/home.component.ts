import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    private map: google.maps.Map;

    public formFiltro: FormGroup;

    filteredOptionsPoi: Observable<any[]>;
    filteredOptionsPlaca: Observable<any[]>;

    constructor(private _fb: FormBuilder, private _snackBar: MatSnackBar) {}

    ngOnInit(): void {
        this._criarFormFiltro();

        let startPoint = { lat: -25.43615638835874, lng: -49.2589101856207 };
        this.map = new google.maps.Map(
            document.querySelector('#map') as HTMLElement,
            {
                center: startPoint,
                zoom: 15,
            }
        );
    }

    private _criarFormFiltro() {
        this.formFiltro = this._fb.group({
            pontoInteresse: [null],
            placa: [null],
            dataLeitura: [null],
        });
    }
}
