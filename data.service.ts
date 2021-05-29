import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {
     
  constructor(private _services:HttpClient) {

   }
   getData(){
   return this._services.get("https://jsonplaceholder.typicode.com/posts");
   }
}
