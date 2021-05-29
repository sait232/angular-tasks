import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import {FormsModule} from '@angular/forms';
import { ChildRouteComponent } from './child-route/child-route.component';
import { RedirectComponent } from './redirect/redirect.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { StudentListComponent } from './student-list/student-list.component';

import{HttpClientModule} from '@angular/common/http';
import { EmployeeCrudComponent } from './employee-crud/employee-crud.component';
import { DataService } from './data.service';



@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseDetailsComponent,
    ChildRouteComponent,
    RedirectComponent,
    EmployeeAddComponent,
    StudentListComponent,
    EmployeeCrudComponent,
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
