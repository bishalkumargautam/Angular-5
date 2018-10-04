import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';


@Component({
 // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees:Employee[]=[
    { id:1,
      name:'Eden',
      gender:'Male',
      contactPreference:'Email',
      email:'test@example.com',
      dateOfBirth:new Date('10/25/1998'),
      department:'IT',
      isActive:true,
      photoPath:'assets/images/Eden.png'
      
    },
    { id:2,
      name:'John',
      gender:'Male',
      contactPreference:'Phone',
      phoneNumber:4099698935,
      dateOfBirth:new Date('11/20/1979'),
      department:'HR',
      isActive:true,
      photoPath:'assets/images/John.png'
     
    },
    { id:1,
      name:'Samantha',
      gender:'Female',
      contactPreference:'Phone',
      phoneNumber:1254789632,
      dateOfBirth:new Date('3/25/1976'),
      department:'IT',
      isActive:false,
      photoPath:'assets/images/Samantha.png'
      
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
