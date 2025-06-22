import { Routes } from '@angular/router';
import { DashboardSummary } from './dashboard-summary/dashboard-summary';
import { LoginSignup } from './login-signup/login-signup';
import { ManageEmployee } from './manage-employee/manage-employee';

export const routes: Routes = [
    {path : "" , component : LoginSignup},
    {path : "dashboard", component : DashboardSummary},
    { path: 'manage-employee', component:  ManageEmployee}
];
