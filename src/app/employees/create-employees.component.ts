import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model'

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
  datePickerConfig: Partial<BsDatepickerConfig>;

  previewPhoto: Boolean = false;

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: '-1',
    isActive: null,
    photoPath: null,
  };

  departments: Department[] = [
    { id: 1, name: 'IT' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'Help Desk' },
    { id: 4, name: 'Payroll' },
    { id: 5, name: 'Admin' }
  ];

  constructor() {
    this.datePickerConfig = Object.assign({}, // customizing date properties like color, maxdate, min date
      {
        containerClass: 'theme-dark-blue',
        // showWeekNumbers: false,
        // minDate: new Date(2018, 0, 1),
        // maxDate: new Date(2018, 12, 31),
        dateInputFormat: 'DD/MM/YYYY',

      });
  }

  togglePreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
  }

  saveEmployee(newEmployee: Employee) :void{
    console.log(newEmployee);
  }
}
