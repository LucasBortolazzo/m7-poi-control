import { EventEmitter, Injectable } from '@angular/core';

import MapUtils from 'src/app/shared/map-utils';
import { Poi } from '../model/poi';

@Injectable({ providedIn: 'root' })
export class GMapService {
    private _map: google.maps.Map;
    private _overlaysArray: any[] = [];

    public $processarCalcularPoisEvent: EventEmitter<Poi | void> = new EventEmitter();

    constructor() { }

    public initializeMap(mapContainer: HTMLElement) {
        const startPoint = { lat: -25.43615638835874, lng: -49.2589101856207 };

        this.map = new google.maps.Map(mapContainer, {
            center: startPoint,
            zoom: 17,
            styles: MapUtils.getDefaultStyle('Cobalt')
        });

        this._implementMapEvents();
    }

    private _implementMapEvents() {
        this.map.addListener('zoom_changed', () => {
            this.map.getZoom() >= 19 ?
                this.map.setMapTypeId('terrain') :
                this.map.setMapTypeId('roadmap');
        });
    }

    public setMapStyle(styleName: string) {
        this.map.setOptions({ styles: MapUtils.getDefaultStyle(styleName) });
    }

    public resetMap() {
        this.setMapcenter(null);
        this.deleteOverlays();
    }

    public get map(): google.maps.Map {
        return this._map;
    }

    public set map(map: google.maps.Map) {
        this._map = map;
    }

    public setMapcenter(
        center: google.maps.LatLng | google.maps.LatLngLiteral | null,
        resetZoom: boolean = true
    ) {
        if (resetZoom) {
            this.map.setZoom(17);
        }
        this.map.setCenter(center);
    }

    public createCircle(
        radius?: number,
        center?: google.maps.LatLng | google.maps.LatLngLiteral | null,
    ) {
        const circle = new google.maps.Circle({
            strokeColor: 'transparent',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.1,
            center: center ? center : this.map.getCenter(),
            radius: radius ? radius : null,
            editable: true,
            draggable: false
        });

        circle.setMap(this.map);
        circle.addListener("radius_changed", () => this._criarPoiDinamico(circle));
        circle.addListener("dragend", () => this._criarPoiDinamico(circle));

        this._overlaysArray.push(circle);
    }

    private _criarPoiDinamico(circle: google.maps.Circle) {
        const newPoiCalculate: Poi = {
            id: new Date().getTime(),
            nome: 'Dynamic POI(Tempor??rio)',
            latitude: circle.getCenter().lat(),
            longitude: circle.getCenter().lng(),
            raio: circle.getRadius(),
            center: {
                lat: circle.getCenter().lat(), lng: circle.getCenter().lng()
            },
            overlay: 'circle',
            totalizadorPoi: null,
            veiculos: []
        };

        this.$processarCalcularPoisEvent.next(newPoiCalculate);
    }

    public createMarker(
        position: google.maps.LatLng | google.maps.LatLngLiteral | null,
        imgIconName?: string,
    ) {
        const imageIcon = {
            url: `../../../../assets/img/${imgIconName}`,
            size: new google.maps.Size(64, 64),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 32),
        };

        const marker = new google.maps.Marker({
            position: position ? position : this.map.getCenter(),
            animation: google.maps.Animation.DROP,
            icon: imgIconName ? imageIcon : null
        });

        marker.setMap(this.map);

        this._overlaysArray.push(marker);

        return marker;
    }

    public createMarkerInfoWindow(
        position: google.maps.LatLng | google.maps.LatLngLiteral | null,
        content: string,
        state: 'opened' | 'closed' = 'closed',
        imgIconName?: string,
    ) {
        const marker = this.createMarker(position, imgIconName);

        const infoWindow = new google.maps.InfoWindow({
            content: content,
        });

        this._overlaysArray.push(infoWindow);

        if (state === 'opened') {
            infoWindow.open(this.map, marker);
        }

        marker.addListener("click", () => {
            this.closeAllInfoWindow();
            infoWindow.open(this.map, marker);
            this.setMapcenter(infoWindow.getPosition(), false);
        });
    }

    public closeAllInfoWindow() {
        for (let i in this._overlaysArray) {
            try {
                if (this._overlaysArray[i] instanceof google.maps.InfoWindow) {
                    this._overlaysArray[i].close();
                };

            } catch (error) {

            }
        }
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
