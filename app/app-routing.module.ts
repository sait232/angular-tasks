import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildRouteComponent } from './child-route/child-route.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeCrudComponent } from './employee-crud/employee-crud.component';
import { RedirectComponent } from './redirect/redirect.component';


const routes:Routes=[
 
  {path:'course',component: CourseListComponent},
 {path:'courses',component:CourseDetailsComponent},
 {path:'hello',component:EmployeeAddComponent},
{path:'hello1',component:EmployeeCrudComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
