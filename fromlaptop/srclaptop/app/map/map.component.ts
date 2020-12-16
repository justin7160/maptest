import { Variable } from '@angular/compiler/src/render3/r3_ast';

import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { HttpClient } from '@angular/common/http';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;
  marker="";
  latLng;
  routeControl;
  waypointsdiy;
  public point: Array<Point>= [];

  datasql=[];
  

  constructor(private http: HttpClient) {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 25.084766,121.5255997 ],
      zoom: 11,      
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    
    tiles.addTo(this.map);
    // this.map.on('click',this.onMapClick);
  
    this.waypointsdiy = [
      L.latLng(25.083999, 121.5481),
      L.latLng(25.079643, 121.556339),
      L.latLng(25.079643, 121.566339),
      L.latLng(25.089643, 121.566339),
      L.latLng(25.089643, 121.536339),
    ];

  var data = [

    {
      "name" : "袖珍博物館",
      "road" : "建國北路一段",
      "city" : "臺北市",
      "lat" : "25.0502862",
      "lon" : "121.5361672"
    },
    {
      "name" : "臺北市立美術館",
      "road" : "中山北路三段",
      "city" : "臺北市",
      "lat" : "25.05620297",
      "lon" : "121.52469283327412"
    },
    {
      "name" : "臺北市立美術館",
      "road" : "中山北路三段",
      "city" : "臺北市",
      "lat" : "25.04620297",
      "lon" : "121.52469283327412"
    },
    {
      "name" : "臺北市立美術館",
      "road" : "中山北路三段",
      "city" : "臺北市",
      "lat" : "25.04620297",
      "lon" : "121.53469283327412"
    },
    {
      "name" : "美麗華百樂園",
      "road" : "敬業三路",
      "city" : "臺北市",
      "lat" : "25.08329345",
      "lon" : "121.55741317249837"
    }
  ];

  this.routeControl = L.Routing.control({
    draggableWaypoints: false,
    lineOptions: {
      styles: [
        {color: 'blue', opacity: 1, weight: 9},
        {color: 'red', opacity: 1, weight: 5}
      ],
    addWaypoints : false
   },
   showAlternatives: false,
   altLineOptions: {
      styles: [
        {color: 'green', opacity: 1, weight: 9}
      ],
      addWaypoints : false
   },
    waypoints: this.waypointsdiy
  }).addTo(this.map);
  // this.routeControl.setWaypoints(data)
  // .addTo(this.map);

  this.routeControl.on('routesfound', function(e) {
    var routes = e.routes;
    var summary = routes[0].summary;
    // alert distance and time in km and minutes
    // alert('Total distance is ' + summary.totalDistance / 1000 + ' km and total time is ' + Math.round(summary.totalTime % 3600 / 60) + ' minutes');
 });

}

public addPoint(pointlat: string, pointlng: string){
  this.waypointsdiy.push(L.latLng(pointlat, pointlng));
  this.routeControl.setWaypoints(this.waypointsdiy);
}
public removePoint(theOne: number){
  this.routeControl.spliceWaypoints(theOne-1,1);
}
  
  public markPoint(lat:string , lon:string): void{
    if(this.marker!=="")
      this.map.removeLayer(this.marker);

    this.marker = L
    .marker([lat , lon],{title: '點A'})
    .addTo(this.map)
    .bindPopup('<h1>這裡是點A</h1>');
    this.map.panTo([lat,lon]);
    this.latLng=[lat,lon];
    }

  public storePoint():void{
    console.log(this.latLng);
    let temppoint : Point;
    temppoint={
      lat:this.latLng[0],
      lon:this.latLng[1]
    };
    this.point.push(temppoint);

    for(let item of this.point){
    L.marker([item.lat,item.lon],{title: '點A'})
    .addTo(this.map);
    }

    var i:number;
    for(i=0;i<this.point.length-1;i++){
      L.Routing.control({
        waypoints: [
          L.latLng(this.point[i].lat,this.point[i].lon),
          L.latLng(this.point[i+1].lat,this.point[i+1].lon)
        ]
      }).addTo(this.map);
    }
  }

  onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
  }
}
export interface Point{
  lat:string;
  lon:string;
}
