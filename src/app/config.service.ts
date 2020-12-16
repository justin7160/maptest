import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { Name } from './Name';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url=`http://localhost:8080/AngularConnect/json/getcitypoint.do`;

  searchMethod$: Observable<any>;
  private searchMethodSubject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.searchMethod$ = this.searchMethodSubject.asObservable();
   }

  getcitypoint(cityTourism:HttpParams):Observable<Name[]>{
    return this.http.get<Name[]>(this.url,{params:cityTourism});
  }

  searchMethod(data) {
    this.searchMethodSubject.next(data);
}

}
