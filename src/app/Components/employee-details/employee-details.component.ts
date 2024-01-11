import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../Model/Employee';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, public empService: EmployeeService) { }
  selectedEmployee: Employee | undefined;
  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   const employeeId = params['employeeId']
    //   this.selectedEmployee = this.empService.getEmployeebyId(employeeId);
    // })
    const employeeId = parseInt(this.route.snapshot.paramMap.get('employeeId')!);
    this.empService.getEmployeebyId(employeeId).subscribe({
      next: res => {
        this.selectedEmployee = res
        console.log('from empoyee detais ::',res)
      },
      error:err=>{
        console.log('from emp detils :: ',err)
      }
    });
  }
}
