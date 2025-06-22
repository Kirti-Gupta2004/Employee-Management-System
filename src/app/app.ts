import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { DashboardSummary } from "./dashboard-summary/dashboard-summary";
import { ReactiveFormsModule } from '@angular/forms';
import { LoginSignup } from './login-signup/login-signup';
import { provideHttpClient } from '@angular/common/http';
import { ManageEmployee } from './manage-employee/manage-employee';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, DashboardSummary,ReactiveFormsModule,LoginSignup, ManageEmployee],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'Employee Management System';
}
