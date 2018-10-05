import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";

@Injectable()
export class EmployeeService {
    private listEmployee: Employee[] = [
        {
            id: 1,
            name: 'Eden',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'test@example.com',
            dateOfBirth: new Date('10/25/1998'),
            department: '2',
            isActive: true,
            photoPath: 'assets/images/Eden.png'

        },
        {
            id: 2,
            name: 'John',
            gender: 'Male',
            contactPreference: 'Phone',
            phoneNumber: 4099698935,
            dateOfBirth: new Date('11/20/1979'),
            department: '3',
            isActive: true,
            photoPath: 'assets/images/John.png'
        },
        {
            id: 1,
            name: 'Samantha',
            gender: 'Female',
            contactPreference: 'Phone',
            phoneNumber: 1254789632,
            dateOfBirth: new Date('3/25/1976'),
            department: '4',
            isActive: false,
            photoPath: 'assets/images/Samantha.png'

        }

    ];

    getEmployees(): Employee[] {
        return this.listEmployee;
    }
    saveEmployee(employee: Employee): void {
        this.listEmployee.push(employee);
    }
}