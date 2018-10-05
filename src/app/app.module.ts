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


//step1
//configuring routes
//when we see given path in uri, we want to load the following component
const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeesComponent },
  { path: '', redirectTo: '/list',pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeesComponent,
    selectvalidationdirective,
    confirmEqualValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)  //step2 letting angular router know about our configured routes 
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
