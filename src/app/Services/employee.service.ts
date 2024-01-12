import { Injectable } from '@angular/core';
import { Employee } from '../Model/Employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://localhost:7048/api/Employee/';
  employee: Employee[] = []
  empData: Employee = new Employee();
  
  getEmployees() {
    return this.http.get(this.baseUrl + 'GetAllEmployees').subscribe({
      next: result => {
        this.employee = result as Employee[]
      },
      error: err => {
        console.log(err)
      }
    })
  }

  getEmployeebyId(empId: number): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + 'GetEmployeeById/' + empId)
  }

  addEmployee(employeeData: Employee) {
    return this.http.post(this.baseUrl + 'AddEmployee', employeeData)
  }

  updateEmployee(empId: number, empUpdateData: Employee) {
    return this.http.put(this.baseUrl + 'EditEmployee/' + empId, empUpdateData)
  }

  deleteEmployee(id:number){
   return this.http.delete(this.baseUrl + 'DeleteEmployee/'+id)
  }
}
