import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './dialog-confirm.component.html',
    styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {
    title: string;
    message: string;

    constructor(public dialogRef: MatDialogRef<DialogConfirmComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
        this.title = data.title;
        this.message = data.message;
    }

    ngOnInit() {
    }

    onConfirm(): void {
        this.dialogRef.close(true);
    }

    onDismiss(): void {
        this.dialogRef.close(false);
    }
}

export interface ConfirmDialogModel {
    title: string;
    message: string;
}
