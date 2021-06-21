import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:any=FormGroup;
usernamePattern:string='^[A-Za-z]+$';
passPattern:string="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  constructor(private _fb:FormBuilder,private router:Router) { 

  }
createForm1(){
  this.loginForm=this._fb.group(
    {
      'Email':new FormControl('',[Validators.required]),
      'Password':new FormControl('',[Validators.required]),
    }
  )
}
  ngOnInit(): void {
    this.createForm1();
  }
  // public getUserName(){
  //   return this.registrationForm1.get('UserEmaiName');
  // }
  // public getpassword(){
  //   return this.registrationForm1.get('Password');
  // }


  //login form method
  public loginFormData(){
    var Email=this.loginForm.controls['Email'].value;
    var password=this.loginForm.controls['Password'].value;
    if(Email=="saiteja@gmail.com"&&password=="Saiteja@123"){
      alert("Login Success");
      this.router.navigate(['user-home']);
    }
    }
}
