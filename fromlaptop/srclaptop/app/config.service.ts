import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Name } from './Name';

@Injectable()
export class ConfigService {

  data : Name[];
  url="http://localhost:8080/AngularConnect/json/getcity.do";
  url2="http://localhost:8080/AngularConnect/json/getcitypoint.do";




  constructor(private http: HttpClient) { }

  getcity(city:HttpParams): Observable<Name[]>{
    return this.http.get<Name[]>(this.url,{params:city});
  }


  getcitypoint(cityAddress:HttpParams): Observable<Name[]>{

    return this.http.get<Name[]>(this.url2,{params:cityAddress});
  }
  
}

