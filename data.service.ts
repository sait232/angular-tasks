import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _service:HttpClient) {

   }
getUserId(){
 return this._service.get("https://jsonplaceholder.typicode.com/posts");
}
// get userinfo//
getUserInfo(id:number){
  return this._service.get("https://jsonplaceholder.typicode.com/posts/"+id);
}
}
