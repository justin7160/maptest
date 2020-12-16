import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map;

  constructor() { }

  ngOnInit(): void {
    
    this.map = L.map('map', { center: [25.084766,121.5255997], zoom: 16 });//指定欲繪製地圖在id為map的元素中，中心座標為[25.0249211,121.5075035]，縮放程度為16
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    const marker1 = L
    .marker([25.084766,121.5255997],{title: '士林夜市'})
    .addTo(this.map)
    .bindPopup('<h1>這裡是士林夜市</h1>');
    const marker2 = L
    .marker([25.07858,121.54338],{title: '大直高中'})
    .addTo(this.map)
    .bindPopup('<h1>這裡是大直高中</h1>');
    var latlngs = [
      [25.08825 ,121.52499],
      [25.084766,121.5255997],
      [25.07858 ,121.54338],
    ];

    L.Routing.control({
      waypoints: [
        L.latLng(25.08825 ,121.52499),
        L.latLng(25.084766,121.5255997)
      ]
    }).addTo(this.map);

    /*
    L.Routing.control({
      router: L.Routing.osrmv1({
          serviceUrl: `http://router.project-osrm.org/route/v1/`
    }),
    showAlternatives: true,
    lineOptions: {styles: [{color: '#242c81', weight: 7}]},
    fitSelectedRoutes: false,
    altLineOptions: {styles: [{color: '#ed6852', weight: 7}]},
    show: false,
    routeWhileDragging: true,
    waypoints: [
        L.latLng(25.08825 ,121.52499),
        L.latLng(25.07858 ,121.54338)
    ]
    }).addTo(this.map);
    */

    /*
    this.map = L.map('map', { center: [25.0249211,121.5075035], zoom: 16 });//指定欲繪製地圖在id為map的元素中，中心座標為[25.0249211,121.5075035]，縮放程度為16
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    const marker1 = L
    .marker([25.084766,121.5255997],{title: '士林夜市'})
    .addTo(this.map)
    .bindPopup('<h1>這裡是士林夜市</h1>');
    const marker2 = L
    .marker([25.07858,121.54338],{title: '大直高中'})
    .addTo(this.map)
    .bindPopup('<h1>這裡是大直高中</h1>');
    var latlngs = [
      [25.08825 ,121.52499],
      [25.084766,121.5255997],
      [25.07858 ,121.54338],
    ];
    var polyline = L.polyline(latlngs, {color: 'red'}).addTo(this.map);
    */

  }

}
