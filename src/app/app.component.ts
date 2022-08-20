import { Component, Inject } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'poi-control';

    constructor(
        private _adapter: DateAdapter<any>,
        @Inject(MAT_DATE_LOCALE)
        private _locale: string
    ) {
        this._locale = 'pt-BR';
        this._adapter.setLocale(this._locale);
    }
}
