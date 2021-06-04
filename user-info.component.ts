import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
 userInfo:any[]=[];
 id:any;
  constructor(private _servicings:DataService,private _router:ActivatedRoute) { }

  ngOnInit(): void {
    this.userInfo1();
  }

  userInfo1(){
  this.id=this._router.snapshot.paramMap.get('id');
  this._servicings.getUserInfo(this.id).subscribe(
     (response:any)=>{
     this.userInfo.push(response);
      console.log(response);
     } 
     
  ),
  (error:any)=>console.log(error); 
 
  }
}
