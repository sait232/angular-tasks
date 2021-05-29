import { Component} from '@angular/core';
import{DataService} from './data.service';



// export class student
//                  {
//   Username:string='';                 
//   Email:string='';
//  Dob:number | undefined;
//  Designation:string='';
//  Password:string='';
//  Mobile:number | undefined;
//  Address:string='';
// }
// export class hello{
//   firstname:string='';
//   lastname:string='';
//   dob:number | undefined;

// }
export class Person{
  push(personArr: any[]) {
    throw new Error('Method not implemented.');
  }
  firstname:string='';
  lastname:string='';
  dob:number | undefined;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person:Person=new Person();
personArr:any[]=[];
isHideTable:boolean=false;
//  no1:number=0;
//  no2:number=0;
//  no3:number=0;
//  numberArray:number[]=[];
//  no4:boolean=false;
//  no5:string='n5';
//  no6:string='n6';

pr:any;

 

 
//  ss:hello=new hello();
//  helloArray:any[]=[];
//  se:student=new student();

 
//  public course=['angular','react','vue','js'];
//   num1:number=0;
//   num2:number=0;
//   add:number=0;
//   isDisabled:boolean=true;
  
//   number1:number=0;
//   number2:number=0;
//   add1:number=0;

//   number11:number=0;
//   number111:number=0;
//   add2:number=0;

//  no:number | undefined;
//  no1:number | undefined;
//  addno:number | undefined;
//  isdisabled:boolean=true;

//  color:string='red';
//  angularClass:string='c1';
//  angularClass1:string='c2';
//  task1:string='';
//  task2:string='';

//  button1:string='b1';
//  button2:string='';
//  button3:string='';
//  button4:string='';
//  button5:string='';

//  c1:string='';  
//  c1Array:string[]=[];

//  input:string='';
//  input1:string="i1";
//  input2:string="i2";
//  input3:string="i3";
//  input4:string="i4";

//  inputPara:string='';
//  isInput:boolean | undefined;
// inpuPara1:string="";  
// inpuPara2:string="";  
// inpuPara3:string="";  
// inpuPara4:string="";  
// inpuPara5:string=""; 

// Id1:Number | undefined;
// Id2:Number | undefined;
// Id3:Number | undefined;
// Id4Array:Number[]=[];

// InputAdd:number=0;
// InputAdd1:number=0;
// InputAdd2:number=0;
// InputArray:number[]=[];
// InputColors:string='ic';
// InputBoolean:boolean=false;
// InputBoolean1:boolean=false;
// InputBoolean2:boolean=false;

// DesignationArray:string[]=["javadeveloper","uxdeveloper","uideveloper","tester","angular developer","js developer"];
// RegistrationInput:string='aa2';
// RegistrationInput1:string='aa3';
// inputCheckbox:string[]=["hello","hi","who","are","you"];
   

  

 add(){
  this.personArr.push(this.person);
  this.person=new Person();
 }
 
save(){ 
 
console.log(this.personArr);
this.isHideTable=true;
}
constructor(private _servicing:DataService){
  // this.person=new Person();
  // this.personArr.push(this.person);  
  // this.ss=new hello();
  // this.helloArray.push(this.ss);
}


 public gets(){
  this. _servicing.getData().subscribe(
    response=>{
         this.pr=response;
    }
  )
   
   
 }
 ngOnInit(): void{
   this.gets();
 }
 
  
//  onAdd(){
//   this.ss=new hello();
//   this.helloArray.push(this.ss);
//  }
//  onSave(){
// console.log(this.helloArray);
//  }
 
// addClick(){
//    this.clickers();
//   for( let i=1;i<=this.no3;i++){
//     if(i%this.no1==0&&i%this.no2==0){
//       this.numberArray.push(i); 
//     }
//   }
// }
// clickers(){
//   if(this.no1>20){
//       alert("must be less than 20");
//     this.no4=true;
//   }
 
  
  
    
 



 
 
  // console.log(this.se);

//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
//  calculate(event:any){
//    this.num1=event.target.value;
//  }
//  calculate1(event:any){
// this.num2=event.target.value;
// this.add=this.number1-this.num2+110;


//  }
//  calci(event:any){
// this.number1=event.target.value;
//  }
//  calci1(event:any){
//   this.number2=event.target.value;
//   this.add1=Number(this.number1)+Number(this.number2)+100
//    }

//    calci11(event:any){
//     this.number11=event.target.value;
//      }
//      calci12(event:any){
//       this.number111=event.target.value;
//       this.add2=Number(this.number11)-Number(this.number111)+110
//        }
//        calculation(){
//          this.addno=Number(this.no)+Number(this.no1);
        

//        }
//        csk1(event:any){
//          this.task1=event.target.value;
//          this.task2=this.task1;
//        }
//        onBlack(){
//         this.button2='b2';
//       }
//       onRed(){
//        this.button3='b3';
//       }
      
//     onGreen(){
//        this.button4='b4';
//     }
//     onOrange(){
//       this.button5='b5';
//     }
   
// addme(){
//  this.c1Array.push(this.c1);
//  this.c1='';
// }
// delete(){
//   this.c1Array.length=this.c1Array.length-1;
// }
// addNumbers(){
// this.Id3=Number(this.Id1)*Number(this.Id2);
// }
//  clickers(){
//   //  this.clickersadd();
//    for(let i=1;i<=this.InputAdd2;i++){
//      if(i%this.InputAdd==0&&i%this.InputAdd1==0){
//       this.InputArray.push(i);

//      }
//    }
//  }
//  clickersadd(){
//    if(this.InputAdd>20){
//         alert("must have less than 20");
//         this.InputBoolean=true;
//    }
//    else{
//        this.InputBoolean=false;
//    }
//    if(this.InputAdd1>30){
//      alert("must have less than 30");
//      this.InputBoolean1=true;

//    }
//    else{
//      this.InputBoolean1=false;
//    }
//    if(this.InputAdd2>100){
//       alert("must have less than 100");
//       this.InputBoolean2=true;
//    }
//    else{
//      this.InputBoolean2=false;
//    }

//  }














}
