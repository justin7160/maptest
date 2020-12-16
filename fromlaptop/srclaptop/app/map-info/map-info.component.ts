import { Component, Injectable, OnInit, AfterViewInit } from '@angular/core';
import { ConfigService } from '../config.service';

import { Observable } from'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Name } from '../Name';

@Injectable({ //依賴注入
  providedIn: 'root'
})
@Component({
  selector: 'app-map-info',
  templateUrl: './map-info.component.html',
  styleUrls: ['./map-info.component.css']
})
export class MapInfoComponent implements OnInit {
  data:Name[];
  cities: string[] = [
    '台北市', '基隆市', '新北市', '宜蘭縣', '桃園市', '新竹市', '新竹縣', '苗栗縣',
    '台中市', '彰化縣', '南投縣', '嘉義市', '嘉義縣', '雲林縣', '台南市', '高雄市',
    '澎湖縣', '金門縣', '屏東縣', '台東縣', '花蓮縣', '連江縣'
  ];

  address1: string="";

  dataForm = new FormGroup({
    city : new FormControl(),
    address: new FormControl( )
  });

  searchplace:Name;




  constructor(private configService: ConfigService) { }

  ngOnInit():void{

  }

  getcity(cityname:HttpParams):void{
    console.log("getcity");
    this.configService.getcity(cityname).subscribe(someplace=>{
      console.log(someplace);
    });
  }

  citypointsearch(inputData:HttpParams): void {
    console.log("getcitypointserach");
    this.configService.getcitypoint(inputData).subscribe(postdata=>{
      console.log(postdata);
    });
  }

  onSubmit1(event:any): void{
    let form_city = new HttpParams()
    .set('city',event);
    console.log("onSubmit1");
    console.log(this.dataForm.value);
    this.getcity(this.dataForm.value);
  }
  
  onSubmit2(): void{
    console.log("onSubmit2");
    console.log(this.dataForm.value);
    this.citypointsearch(this.dataForm.value);
  }


  test():void{
    console.log()
  }
}

