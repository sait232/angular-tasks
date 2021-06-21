import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  passwordPattern:string="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  firstNamePattern:string='^[A-Za-z]+$';
  LastNamePattern:string='^[A-Za-z]+$';
  professionPattern:string='^[A-Za-z]+$';
  countryPattern:string='^[A-Za-z]+$';
  cityPattern:string='^[A-Za-z]+$';
  emailpattern:string="^[a-zA-Z0-9.!#$%&amp;'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  registrationForm:any=FormGroup;

   constructor(private _fb:FormBuilder,private _servicing:DataService,private router:Router) {
   }
createForm(){
  this.registrationForm=this._fb.group(
    {
      'FirstName':new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern(this.firstNamePattern)]),
      'LastName':new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern(this.LastNamePattern)]),
      'Email':new FormControl('',[Validators.required,Validators.pattern(this.emailpattern)]),
      'Password':new FormControl('',[Validators.required,Validators.pattern(this.passwordPattern)]),
      'Profession':new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern(this.professionPattern)]),
      'Country':new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern(this.countryPattern)]),
      'City':new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern(this.cityPattern)])

    }
  )
}
 
  ngOnInit(): void {
    this.createForm();
  }
  public getPassword(){
   return this.registrationForm.get('Password');
  }
  public getFirstName(){
    return this.registrationForm.get('FirstName');
  }
  public getLastName(){
    return this.registrationForm.get('LastName');
  }
  public getProfession(){
    return this.registrationForm.get('Profession');
  }
  public getCountry(){
    return this.registrationForm.get('Country');
  }
  public getCity(){
    return this.registrationForm.get('City');
  }
  public getEmail(){
    return this.registrationForm.get('Email');
  }
////Service method
public retrievingPostUser(){
  this._servicing.postUser(this.registrationForm.value).subscribe(
    (response:any)=>{
      console.log(response);
      alert("registration  succesfull");
      this.router.navigate(['login']);
    },
    
  )
}


}
