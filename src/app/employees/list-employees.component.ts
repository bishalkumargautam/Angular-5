import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';
import { EmployeeService } from './employee.service';


@Component({
 // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
 
  employees:Employee[];
  
//using service. When an instance of ListEmployeeComponent is created, angular is going to
// automatically create instance of of EmployeeServce into private field _employeeSerivce. 
//Then we can use _employeeService to access the EmployeeService instance.
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
     this.employees= this._employeeService.getEmployees();
  }

}
