import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Poi } from '../home/model/poi';

@Component({
    selector: 'app-dialog-memoria-calculo',
    templateUrl: './dialog-memoria-calculo.component.html',
    styleUrls: ['./dialog-memoria-calculo.component.scss']
})
export class DialogMemoriaCalculoComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
