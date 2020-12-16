import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';


@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements AfterViewInit {
  map;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map');

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    L.Routing.control({
        waypoints: [
            L.latLng(57.74, 11.94),
            L.latLng(57.6792, 11.949)
        ],
        routeWhileDragging: true
    }).addTo(this.map);
    // this.map.on('click', this.mapClick(e));
  }
  
  public createButton(label, container) {
    var btn = L.DomUtil.create('button', '', container);
    btn.setAttribute('type', 'button');
    btn.innerHTML = label;
    return btn;
}

  mapClick(e) {
    var container = L.DomUtil.create('div'),
    startBtn = this.createButton('Start from this location', container),
    destBtn = this.createButton('Go to this location', container);

  L.popup()
    .setContent(container)
    .setLatLng(e.latlng)
    .openOn(this.map);
  }

}
