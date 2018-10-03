import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model'

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {

  // department='2';//select option 2 by default from select list
  // gender='male'; // this line checks the gender radio button to male by default
  // isActive= false; // to check the checkbox by default
  // constructor() { }


  //define departments properties to dynamically populate select in .html
  departments: Department[] = [
    { id: 1, name: 'IT' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'Help Desk' },
    { id: 4, name: 'Payroll' },
    {id:5, name:'Admin'}
  ];


  ngOnInit() {
  }

  saveEmployee(empForm: NgForm) {
    console.log(empForm);
  }
}
