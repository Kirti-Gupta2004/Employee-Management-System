import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Navbar } from '../navbar/navbar';
import { ManageEmployee } from '../manage-employee/manage-employee';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'dashboard-summary',
  imports: [MatIconModule,Navbar,ManageEmployee,RouterModule],
  templateUrl: './dashboard-summary.html',
  styleUrl: './dashboard-summary.css'
})
export class DashboardSummary {
  totalEmployees = 120;
  attendance = 95.5;
  pendingLeaves = 6;
}
