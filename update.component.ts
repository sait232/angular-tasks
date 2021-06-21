import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
updateForm:any=FormGroup;
userArr: any[]=[];
selectedId:any;
  constructor(private _fb:FormBuilder,private _service:DataService,
    private _router:Router,private _routing:ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm2();
    this.selectedId=this._routing.snapshot.paramMap.get('id');
    this.retrieveUserById();
  }
  retrieveUserById(){
    this._service.getUserById(this.selectedId).subscribe(
     (response:any)=>{
         this.userArr=response;
         console.log(this.userArr);
       this.updateForm.controls['FirstName'].setValue(response.FirstName);
       this.updateForm.controls['LastName'].setValue(response.LastName);
       this.updateForm.controls['Email'].setValue(response.Email);
       this.updateForm.controls['Password'].setValue(response.Password);
       this.updateForm.controls['Profession'].setValue(response.Profession);
       this.updateForm.controls['Country'].setValue(response.Country);
       this.updateForm.controls['City'].setValue(response.City);
     },
     (error:any)=>{
       console.log(error)
     }
    )
  }

  createForm2(){
    this.updateForm=this._fb.group(
      {
        'FirstName':new FormControl('',[Validators.required,]),
        'LastName':new FormControl('',[Validators.required]),
        'Email':new FormControl('',[Validators.required,]),
        'Password':new FormControl('',[Validators.required,]),
        'Profession':new FormControl('',[Validators.required]),
        'Country':new FormControl('',[Validators.required]),
        'City':new FormControl('',[Validators.required])
  
      }
    )
    }
    updateAUser(){
      this._service.updateUser(this.selectedId,this.updateForm.value).subscribe(
        (reponse:any)=>{
          alert("updated Success");
           this._router.navigate(['user-home']);
          console.log(reponse);
        },
       (error:any)=>{
         alert("updation  Failed");
         console.log(error);
       } 
       )
      }
  }