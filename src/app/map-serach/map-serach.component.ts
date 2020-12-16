import { HttpParams } from '@angular/common/http';
import { Component, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ConfigService } from '../config.service';
import { Name } from '../Name';


@Component({
  selector: 'app-map-serach',
  templateUrl: './map-serach.component.html',
  styleUrls: ['./map-serach.component.css']
})
export class MapSerachComponent implements AfterViewInit {

  cities: string[] = [
    '臺北市', '基隆市', '新北市', '宜蘭縣', '桃園市', '新竹市', '新竹縣', '苗栗縣',
    '臺中市', '彰化縣', '南投縣', '嘉義市', '嘉義縣', '雲林縣', '臺南市', '高雄市',
    '澎湖縣', '金門縣', '屏東縣', '臺東縣', '花蓮縣', '連江縣'
  ];

  searchForm = new FormGroup({
    city : new FormControl(),
    tourism: new FormControl()
  });

  searchResult;


  constructor(private configService: ConfigService) { 

  }

  ngAfterViewInit(): void {
    
  }

  //接收搜尋城市景點
  onSubmitCityTourism(): void{
    let inputCityTourism = new HttpParams()
      .set('city',this.searchForm.controls['city'].value)
      .set('tourism',this.searchForm.controls['tourism'].value);

    this.configService.getcitypoint(inputCityTourism).subscribe(data=>{
      this.searchResult=data;
      this.configService.searchMethod(data);
    });
  }


}
