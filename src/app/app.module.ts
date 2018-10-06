import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {selectvalidationdirective} from './shared/select-required-validator.directive';
import {confirmEqualValidator} from './shared/confirm-equal-validator.directive';



import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeesComponent } from './employees/create-employees.component';
import {FormsModule} from '@angular/forms'
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import {CreateEmployeeCanDeactivateGuardService}  from './employees/create-employee-can-activate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component'


//step1
//configuring routes
//when we see given path in uri, we want to load the following component
const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { 
    path: 'create',
   component: CreateEmployeesComponent,
   canDeactivate :[CreateEmployeeCanDeactivateGuardService] //step 3 route guard: tie the route guard with route that you want to protect
  },
  { path: '', redirectTo: '/list',pathMatch:'full' },
  {path:'employees/:id', component:EmployeeDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeesComponent,
    selectvalidationdirective,
    confirmEqualValidator,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)  //step2 letting angular router know about our configured routes 
  ],
  providers: [EmployeeService,CreateEmployeeCanDeactivateGuardService], //step2 route guard: tie the guard with angular dependency system
  bootstrap: [AppComponent]
})
export class AppModule { }
