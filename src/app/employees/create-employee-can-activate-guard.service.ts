// step 1 Building the Guard service

import { CreateEmployeesComponent } from './create-employees.component';
import { CanDeactivate } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable()
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeesComponent>
{
    constructor(){};
    canDeactivate(component: CreateEmployeesComponent): boolean {
        if (component.createEmployeeForm.dirty) {
            return confirm('Are you sure you want to discard your changes?');
        }
        return true;
    }
}

