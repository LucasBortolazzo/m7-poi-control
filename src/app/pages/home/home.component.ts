import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    private map: any;

    constructor() {}

    ngOnInit(): void {
        let startPoint = { lat: -25.43615638835874, lng: -49.2589101856207 };
        this.map = new google.maps.Map(document.querySelector('#map'), {
            center: startPoint,
            zoom: 15,
        });

        console.log(this.map);
    }
}
