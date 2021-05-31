import { Component} from '@angular/core';
import { DataService } from './data.service';
export class student{
  names:string='';
  password:string='';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
s1:student=new student();
students:string='';

  
 
constructor(private _servicing:DataService){
 
}
ngOnInit(): void{
  
  }
  
valid(){
  if(this.s1.names=="marripellysaiteja@gmail.com"&&this.s1.password=="lordshiva123"){
    
    this.students="login sucess";
    
   

  }
  else{
    this.students="login failed";
   
  }
}


}

