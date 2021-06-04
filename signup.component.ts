import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  passwordPattern:string="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
   registrationFrom:any= FormGroup ;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(){
    this.registrationFrom=this.fb.group(
      {
      'FirstName':new FormControl('',[Validators.required,Validators.minLength(5)]),
      'LastName':new FormControl('',[Validators.required,Validators.minLength(5)]),
      'Password':new FormControl('',[Validators.required,Validators.pattern(this.passwordPattern)]), 
      'Email':new FormControl('',[Validators.required,Validators.pattern()]),
      'MobileNumber':new FormControl('',[Validators.required,]),
      'City':new FormControl('',[Validators.required,]),
      'Country':new FormControl('',[Validators.required,]),
      'dob':new FormControl('',[Validators.required,]),
      }
    )

  }
// validations
  public getfirstname(){
    return this.registrationFrom.get('FirstName');
    
  }
  public getlastname(){
    return this.registrationFrom.get('LastName');
  }
  public getpassword(){
      return this.registrationFrom.get('Password');
  }
  public getemail(){
    return this.registrationFrom.get('Email');
  }

}
