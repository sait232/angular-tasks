import { Component, OnInit } from '@angular/core';
export class student{
  names:string='';
  password:string='';
}
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  s1:student=new student();
  students:string='';
  constructor() { }

  ngOnInit(): void {
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
