import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Poi } from '../home/model/poi';

@Component({
    selector: 'app-dialog-memoria-calculo',
    templateUrl: './dialog-memoria-calculo.component.html',
    styleUrls: ['./dialog-memoria-calculo.component.scss']
})
export class DialogMemoriaCalculoComponent implements OnInit {

    dataTest = {
        'simple key': 'simple value',
        'numbers': 1234567,
        'simple list': ['value1', 22222, 'value3'],
        'special value': null as any,
        'owner': null as any,
        'simple obect': {
            'simple key': 'simple value',
            'numbers': 1234567,
            'simple list': ['value1', 22222, 'value3'],
            'simple obect': {
                'key1': 'value1',
                'key2': 22222,
                'key3': 'value3'
            }
        }
    };

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
    }
    get code() {
        return JSON.stringify(this.dataTest, null, 2);
    }

    set code(v) {
        try {
            this.dataTest = JSON.parse(v);
        }
        catch (e) {
            console.log('error occored while you were typing the JSON');
        };
    }

}
