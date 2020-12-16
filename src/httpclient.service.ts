import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { jsonInterface } from './app/jsonInterface';


@Injectable({
  providedIn: 'root'
})
export class HttpclientService {


  private myURL: string = 'https://jsonplaceholder.typicode.com/';
  myjsonInterface : jsonInterface[];

  constructor(private http: HttpClient) { }
  
  public  getUrlData() : Observable<jsonInterface[]> {
    return this.http.get<jsonInterface[]>("myURL");
  }
}
