import { Employee } from './../models/employee.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employee: Employee;
  // @Output() notify: EventEmitter<Employee>= new EventEmitter<Employee>(); //we transmit data from child component to parent component 
  //using EventEmitter

  constructor() { }

  ngOnInit() {
  }

  // handleClick(){
  //   this.notify.emit(this.employee);
  // }

  //change detection using setter and getter method
  // private _employee: Employee;
  // @Input()
  // set employee(value: Employee) {
  //   console.log('Previous : ' + (this._employee ? this._employee.name : 'Null'));
  //   this._employee = value;
  //   console.log('Current : ' + this._employee.name);
  // }
  // get employee(): Employee {
  //   return this._employee;
  // }

  // // This life cycle hook receives SimpleChanges as an Input parameter
  // // We can use it to retrieve previous and current values as shown below
  // ngOnChanges(changes: SimpleChanges) {
  //   const previousEmployee = <Employee>changes.employee.previousValue;
  //   const currentEmployee = <Employee>changes.employee.currentValue;

  //   console.log('Previous : ' + (previousEmployee ? previousEmployee.name : 'NULL'));
  //   console.log('Current : ' + currentEmployee.name);
  // }
}
