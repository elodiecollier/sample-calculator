import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  url:string = "http://127.0.0.1:3000";

  constructor(private http: HttpClient) { }

  listValue () {
    return this.http.get(this.url+'/api/v1/values');
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  addValue(data:any) {
    return this.http.post(this.url+'/api/v1/values', data, this.httpOptions)
  }

}
