import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GMapService {
    private _map: google.maps.Map;
    private _circle: google.maps.Circle;

    constructor() {}

    public get map() {
        return this._map;
    }

    public set map(map: google.maps.Map) {
        this._map = map;
    }

    public _initializeMap(mapContainer: HTMLElement) {
        let startPoint = { lat: -25.43615638835874, lng: -49.2589101856207 };

        this.map = new google.maps.Map(mapContainer, {
            center: startPoint,
            zoom: 16,
        });
    }

    public createCircle(
        radius?: number,
        center?: google.maps.LatLng | google.maps.LatLngLiteral
    ) {
        if (!this.map) {
            return;
        }

        this._circle?.setMap(null);

        this._circle = new google.maps.Circle({
            strokeColor: 'transparent',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.1,
            center: center ? center : this.map.getCenter(),
            radius: radius ? radius : null,
        });

        this._circle.setMap(this.map);
    }
}
