import { Component, Input } from '@angular/core';
import { Employee } from '../../Model/Employee';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  constructor(public empService: EmployeeService) { }
  ngOnInit(): void {
    this.empService.getEmployees()
  }
}
