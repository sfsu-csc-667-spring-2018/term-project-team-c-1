import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  private jwt() {
    const authToken = localStorage.getItem('UnoToken');
    if(authToken) {
      const header = new Headers({'JWT-AuthToken': authToken});
      return new RequestOptions({headers: header});
    }
  }

  getAll(path) {
    return this.http.get('/api/' + path, this.jwt()).map((response: Response) => response.json());
  }

  get(path, data) {
    const params: URLSearchParams = new URLSearchParams();
    for (var key in data) {
      params.set(key,data[key]);
    }
    let req:RequestOptions=this.jwt();
    req['search']=params;
    return this.http.get('/api/'+path,req).map((response:Response)=>response.json());
  }

  post(path,data){
    return this.http.post('/api/'+path,data,this.jwt()).map((response:Response)=>response.json());
  }

  put(path,data){
    return this.http.put('/api/'+path,data,this.jwt()).map((response:Response)=>response.json());
  }

  delete(path,data){
    return this.http.delete('/api/'+path+data,this.jwt()).map((response:Response)=>response.json());
  }
}
