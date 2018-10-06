import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';


@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  // displayEmployee: Employee;
  employees: Employee[];
  // employeeToDisplay: Employee;
  // private arrayIndex = 1;

  //using service. When an instance of ListEmployeeComponent is created, angular is going to
  // automatically create instance of of EmployeeServce into private field _employeeSerivce. 
  //Then we can use _employeeService to access the EmployeeService instance.
  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    // this.employeeToDisplay = this.employees[0];
  }

  onClick(employeeId: number): void {
    this._router.navigate(['/employees',employeeId]);
  }

  // handleNotify(eventData: Employee) {
  //   this.displayEmployee = eventData;
  // }

  // nextEmployee(): void {
  //   if (this.arrayIndex <= 2) {
  //     this.employeeToDisplay = this.employees[this.arrayIndex];
  //     this.arrayIndex++;  


  //   }
  //   else {
  //     this.employeeToDisplay = this.employees[0];
  //     this.arrayIndex = 0;
  //   }

  // }
}
