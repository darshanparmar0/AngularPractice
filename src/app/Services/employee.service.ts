import { Injectable } from '@angular/core';
import { Employee } from '../Model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() { }
  private employees: Employee[] = [
    { empId: 1, empName: 'Employee-01', JoiningDate: '10-09-2020' },
    { empId: 2, empName: 'Employee-02', JoiningDate: '11-10-2021' },
    { empId: 3, empName: 'Employee-03', JoiningDate: '12-11-2022' },
  ];

  getEmployees(): Employee[] {
    return this.employees
  }

  getEmployeebyId(empId: number) {
    return this.employees.find((employee) => employee.empId == empId)
  }
}
