import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _service:HttpClient) {

   }
getData(){
 return this. _service.get("https://jsonplaceholder.typicode.com/posts");
}
/*user id only*/
getUserId(id:number){
 return  this._service.get("https://jsonplaceholder.typicode.com/posts/"+id);
}


}
