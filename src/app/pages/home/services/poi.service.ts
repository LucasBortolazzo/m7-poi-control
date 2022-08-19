import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { FilterForm } from '../model/filtro-form';
import { LeituraPosicao } from '../model/leitura-posicao';

import { Poi } from '../model/poi';

@Injectable({ providedIn: 'root' })
export class PoiService {
    constructor(private http: HttpClient) {}

    public getPois(): Observable<Poi[]> {
        const url = `${environment.api}/pois`;
        return this.http.get<any>(url);
    }

    public getPlacas(): Observable<string[]> {
        const url = `${environment.api}/posicao/placas`;
        return this.http.get<any>(url);
    }

    public getLeituraPosicao(
        filtro?: FilterForm
    ): Observable<LeituraPosicao[]> {
        const url = `${environment.api}/posicao`;
        let params = new HttpParams();

        if (filtro) {
            if (filtro.placa) {
                params = params.append('placa', filtro.placa);
            }

            if (filtro.dataLeitura) {
                // const dataEncoded = encodeURIComponent(filtro.dataLeitura.toString());
                params = params.append('data', filtro.dataLeitura.toString());
            }
        }

        return this.http.get<any>(url, { params: params });
    }
}
