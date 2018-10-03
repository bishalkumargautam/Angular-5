import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {

  department='2';//select option 2 by default from select list
  gender='male'; // this line checks the gender radio button to male by default
  isActive= false; // to check the checkbox by default
  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empForm:NgForm){
    console.log(empForm);
  }
}
