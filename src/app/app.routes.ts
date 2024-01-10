import { Routes } from '@angular/router';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';

export const routes: Routes = [
    {path:'',redirectTo:'/Employee',pathMatch:'full'},
    {path:'Welcome',component:WelcomeComponent},
    {path:'Employee',component:EmployeeListComponent},
    {path:'Employee/:employeeId',component:EmployeeDetailsComponent}
];
