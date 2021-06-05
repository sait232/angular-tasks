import { Component} from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 array:any[]=[];
 id:any;
constructor(private _servicing:DataService){
}
getRetrieval(){
  this._servicing.getUser(this.id).subscribe(
    (response:any)=>{
         this.array.push(response); 
         console.log(this.array.push(response));   
    }
  ),
  (error:any)=>console.log(error);
}
add(){
this.getRetrieval();
}

  }


