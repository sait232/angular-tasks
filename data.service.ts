import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
baseUrl:any="http://localhost:3000/";
  constructor(private _service:HttpClient) {

   }
 public postUser(user:any){
   return this._service.post(this.baseUrl+'users',user)
 }

 //Getalluser data
 public getAllUsers(){
   return this._service.get(this.baseUrl+'users');
 }
 //Delete method
 public deleteUser(id:number){
 return this._service.delete(this.baseUrl+`users/${id}`);
 }
//  Getuserbyid method---displaying number on search bar it is for activated route snapshot
 public getUserById(id:number){
   return this._service.get(this.baseUrl+`users/${id}`);
 }
 //Update method using id like delete
 public updateUser(id:number,user:any){
  return this._service.put(this.baseUrl+`users/${id}`,user);
}


}
