import {
    HashLocationStrategy,
    LocationStrategy,
    registerLocaleData,
} from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';

import {
    DateAdapter,
    MAT_DATE_FORMATS,
    MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
    MAT_MOMENT_DATE_ADAPTER_OPTIONS,
    MAT_MOMENT_DATE_FORMATS,
    MomentDateAdapter,
} from '@angular/material-moment-adapter';

import { NgxSpinnerModule } from 'ngx-spinner';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DialogMemoriaCalculoComponent } from './pages/dialog-memoria-calculo/dialog-memoria-calculo.component';
import { DialogConfirmComponent } from './pages/dialog-confirm/dialog-confirm.component';

registerLocaleData(localePt);
export const PT_BR_DATE_FORMAT = {
    parse: {
        dateInput: ['l', 'LL'],
    },
    display: {
        dateInput: 'L',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@NgModule({
    declarations: [AppComponent, HomeComponent, DialogMemoriaCalculoComponent, DialogConfirmComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        NgxSpinnerModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
        },
        { provide: MAT_DATE_FORMATS, useValue: PT_BR_DATE_FORMAT },
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
