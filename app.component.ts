import { Component} from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 pr:any;
 ir:any;
 

 user:any[]=[];
 color:string='ccp';
  
constructor(private _servicing:DataService){
 
}
ngOnInit(): void{
  this.getData1();
  
  
  }
  
getData1(){
  this. _servicing.getData().subscribe(
    response=>{
      this.pr=response;
    }
  )
}
// *userid 1//
public getUserId1(){
  this._servicing.getUserId(this.ir).subscribe(
    response=>{
       this.user.push(response);

      
    }
  )
}
 userAdd(){
  alert("hello");
this.getUserId1(); 
}

}

