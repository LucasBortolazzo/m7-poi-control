import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
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
        const url = `${environment.api}/placas`;
        return this.http.get<any>(url);
    }

    public getLeituraPosicao(): Observable<LeituraPosicao[]> {
        const url = `${environment.api}/posicao`;
        return this.http.get<any>(url);
    }

    public getLeituraPosicaoByPlaca(
        placa: string
    ): Observable<LeituraPosicao[]> {
        const url = `${environment.api}/posicao`;

        let params = new HttpParams();
        params = params.append('placa', placa);

        return this.http.get<any>(url, { params: params });
    }
}
