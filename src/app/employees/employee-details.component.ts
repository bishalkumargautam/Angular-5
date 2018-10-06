import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;
  constructor(private _route: ActivatedRoute,
    private _employee: EmployeeService,
    private _router: Router) { }

  ngOnInit() {
    //subscribing to route parameter changes.
    this.id = +this._route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.employee = this._employee.getEmployeeById(this.id);
    })
  }

  nextEmployee() {
    if(this.id<3){
    this.id = this.id + 1;
    }
    else{
      this.id=1;
    }
    this._router.navigate(['/employees', this.id]);
  }
}
