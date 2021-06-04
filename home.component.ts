import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user:any[]=[];

  constructor(private _service:DataService) { }

  ngOnInit(): void {
    this.retrieveUser();
  }
  retrieveUser(){
    this._service.getUserId().subscribe(
      (response:any)=>{
         this.user=response;
        console.log(response);
      }
      
    ),
    (error:any)=>console.log(error);
    
  }

}
