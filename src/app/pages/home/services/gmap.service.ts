import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GMapService {
    private _map: google.maps.Map;
    private _overlaysArray: any[] = [];

    constructor() { }

    public _initializeMap(mapContainer: HTMLElement) {
        let startPoint = { lat: -25.43615638835874, lng: -49.2589101856207 };

        this.map = new google.maps.Map(mapContainer, {
            center: startPoint,
            zoom: 16,
        });
    }

    public resetMap() {
        //  this.setMapcenter(null);
        //  this.deleteOverlays();
    }

    public get map(): google.maps.Map {
        return this._map;
    }

    public set map(map: google.maps.Map) {
        this._map = map;
    }

    public setMapcenter(
        center: google.maps.LatLng | google.maps.LatLngLiteral,
        config?: { emitChangeEvent: boolean; }
    ) {
        this.map.setCenter(center);

        if (config && !config.emitChangeEvent) {
            return;
        }
    }

    public createCircle(
        radius?: number,
        center?: google.maps.LatLng | google.maps.LatLngLiteral
    ) {
        const circle = new google.maps.Circle({
            strokeColor: 'transparent',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.1,
            center: center ? center : this.map.getCenter(),
            radius: radius ? radius : null,
        });

        circle.setMap(this.map);

        this._overlaysArray.push(circle);
    }

    public createMarker(
        position?: google.maps.LatLng | google.maps.LatLngLiteral
    ) {
        const marker = new google.maps.Marker({
            position: position ? position : this.map.getCenter(),
        });

        marker.setMap(this.map);

        this._overlaysArray.push(marker);
    }


    private deleteOverlays() {
        if (this._overlaysArray) {
            for (let i in this._overlaysArray) {
                this._overlaysArray[i].setMap(null);
            }
            this._overlaysArray.length = 0;
        }
    }
}
