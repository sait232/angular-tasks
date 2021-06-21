import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
allUsersData:any;
  constructor(private _servicings:DataService,private _router:Router) {
    
   }

  ngOnInit(): void {
    this.RetrievalData();

  }

  RetrievalData(){
     this._servicings.getAllUsers().subscribe(
       (response:any)=>{
         this.allUsersData=response;
         console.log(response);
       }
     )
  }
  
  //Delete merthod
 delete(value){
   if(confirm("Do you wanna delete ?"))
{
  this._servicings.deleteUser(value).subscribe(
  response=>{ 
    console.log(response);
    this.RetrievalData();
  }
    )
} 
 } 
 onUpdate(value){
   alert("hello");
  this._router.navigate(['update',value]);
 }
}
