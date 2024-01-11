import { Component } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  constructor(public empService: EmployeeService) { }

  onSubmit(form: NgForm) {
    if(form.valid){
      this.empService.addEmployee().subscribe({
        next:data=>{
          console.log(data)
        }
      })
      form.form.reset()
    }else{
      console.log('provide valid data')
    }
  }
}
