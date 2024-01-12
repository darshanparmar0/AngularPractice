import { Routes } from '@angular/router';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';

export const routes: Routes = [
    {path:'',redirectTo:'/Welcome',pathMatch:'full'},
    {path:'Welcome',component:WelcomeComponent},
    {path:'Employee',component:EmployeeListComponent},
    {path:'AddEmployee',component:AddEmployeeComponent},
    {path:'Employee/:employeeId',component:EmployeeDetailsComponent},
    {path:'EditEmployee/:employeeId',component:AddEmployeeComponent}
];
