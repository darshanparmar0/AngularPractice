import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../Model/Employee';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  empId = this.route.snapshot.paramMap.get('employeeId');

  constructor(private formBuilder: FormBuilder, public empService: EmployeeService, private route: ActivatedRoute, private routeNav: Router) {
    this.employeeForm = formBuilder.group({
      employeeName: ['', Validators.required],
      employeeAge: ['', Validators.required],
      employeePosition: ['', Validators.required],
      joiningDate: ['', Validators.required],
    })
  }
  ngOnInit(): void {
    const employeeId = this.route.snapshot.paramMap.get('employeeId');
    if (employeeId) {
      this.empService.getEmployeebyId(+employeeId).subscribe({
        next: (employeeData) => {
          this.employeeForm.patchValue(employeeData);
        },
        error: (err) => {
          console.error('Error fetching employee:', err);
        }
      });
    }
  }


  onSubmit() {
    if (this.employeeForm.valid) {
      const employeeData = this.employeeForm.value;
      const employeeId = parseInt(this.route.snapshot.paramMap.get('employeeId')!);
      if (employeeId) {
        this.updateEmpRecord(employeeId, employeeData)
      } else {
        this.insertEmployee(employeeData)
      }
    } else {
      console.log('invalid form data...');
    }
  }

  updateEmpRecord(id: number, data: Employee) {
    this.empService.updateEmployee(id, data).subscribe({
      next: (res) => {
        this.employeeForm.reset()
        this.routeNav.navigate(['/Employee'])
      },
      error: (err) => {
        console.log('update error : ', err)
      }
    })
  }

  insertEmployee(data: Employee) {
    this.empService.addEmployee(data).subscribe({
      next: data => {
        console.log(data)
        this.routeNav.navigate(['/Employee'])
        this.employeeForm.reset()
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
