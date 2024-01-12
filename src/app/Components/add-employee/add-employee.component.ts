import { Component } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  employeeForm : FormGroup;

  constructor(private formBuilder:FormBuilder, public empService: EmployeeService) {
    this.employeeForm = formBuilder.group({
      employeeName:['',Validators.required],
      employeeAge: ['', Validators.required],
      employeePosition: ['', Validators.required],
      joiningDate: ['', Validators.required],
    })
   }

  onSubmit() {
    if(this.employeeForm.valid){
      const employeeData = this.employeeForm.value;
      this.empService.addEmployee(employeeData).subscribe({
        next:data=>{
          debugger
          console.log(data)
          this.employeeForm.reset()
        },
        error:err=>{
          console.log(err)
        }
      })
    }else{
      console.log('invalid form data...');
    }
  }
}
