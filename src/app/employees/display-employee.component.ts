import { Employee } from './../models/employee.model';
import { Component, OnInit, Input, OnChanges,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employee:Employee;

  constructor() { }

  ngOnInit() {
  }
  
 // This life cycle hook receives SimpleChanges as an Input parameter
// We can use it to retrieve previous and current values as shown below
ngOnChanges(changes: SimpleChanges) {
  const previousEmployee = <Employee>changes.employee.previousValue;
  const currentEmployee = <Employee>changes.employee.currentValue;

  console.log('Previous : ' + (previousEmployee ? previousEmployee.name : 'NULL') );
  console.log('Current : ' + currentEmployee.name);
}
}
