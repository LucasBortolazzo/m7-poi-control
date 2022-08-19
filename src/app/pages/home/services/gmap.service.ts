import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GMapService {
    private _map: google.maps.Map;
    private _circle: google.maps.Circle;
    private _overlaysArray: any[] = [];

    private _onChangeMapCenterEvent = new EventEmitter<void>();

    constructor() {}

    public _initializeMap(mapContainer: HTMLElement) {
        let startPoint = { lat: -25.43615638835874, lng: -49.2589101856207 };

        this.map = new google.maps.Map(mapContainer, {
            center: startPoint,
            zoom: 16,
        });

        this._implementEvents();
    }

    private _implementEvents() {
        this._onChangeMapCenterEvent.subscribe(() => {
            this.deleteOverlays();
        });
    }

    public resetMap() {
        this.setMapcenter(null);
    }

    public get map(): google.maps.Map {
        return this._map;
    }

    public set map(map: google.maps.Map) {
        this._map = map;
    }

    public setMapcenter(
        center: google.maps.LatLng | google.maps.LatLngLiteral,
        config?: { emitChangeEvent: boolean }
    ) {
        this.map.setCenter(center);

        if (config && !config.emitChangeEvent) {
            return;
        }

        this._onChangeMapCenterEvent.next();
    }

    public createCircle(
        radius?: number,
        center?: google.maps.LatLng | google.maps.LatLngLiteral
    ) {
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

        this._overlaysArray.push(this._circle);
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
