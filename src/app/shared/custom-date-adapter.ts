/* tslint:disable */
import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';

const SUPPORTS_INTL_API = typeof Intl !== 'undefined';

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {
    useUtcForDisplay = true;

    parse(value: any): Date | null {
        if (typeof value === 'string' && value.indexOf('/') > -1) {
            const str = value.split('/');

            const year = Number(str[2]);
            const month = Number(str[1]) - 1;
            const date = Number(str[0]);

            return new Date(year, month, date);
        }
        const timestamp = typeof value === 'number' ? value : Date.parse(value);
        return isNaN(timestamp) ? null : new Date(timestamp);
    }

    // to be removed when mmalerba merge some mods in the next beta
    format(date: Date, displayFormat: Object): any {
        if (SUPPORTS_INTL_API) {
            if (this.useUtcForDisplay) {
                date = new Date(
                    Date.UTC(
                        date.getFullYear(),
                        date.getMonth(),
                        date.getDate(),
                        date.getHours(),
                        date.getMinutes(),
                        date.getSeconds(),
                        date.getMilliseconds()
                    )
                );
                displayFormat = Object.assign({}, displayFormat, {
                    timeZone: 'utc',
                });
            }

            const dtf = new Intl.DateTimeFormat('pt-BR', displayFormat);
            return dtf.format(date).replace(/[\u200e\u200f]/g, '');
        }
    }
}
