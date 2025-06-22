import { Component } from '@angular/core';
import { EmployeeService } from '../services/employees.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { Navbar } from "../navbar/navbar";
import { FormsModule } from '@angular/forms'; // ✅ Required for [(ngModel)]
import { Employee } from '../models/Employee';

@Component({
  selector: 'manage-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, Navbar], // ✅ Corrected
  templateUrl: './manage-employee.html',
  styleUrl: './manage-employee.css'
})
export class ManageEmployee {
  employees: Employee[] = [];

  showAddModal = false;

  newEmployee: Employee = {
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    designation: '',
    dob: new Date(),
    joiningDate: new Date(),
    salary: 0
  };

  constructor(
    private employeeService: EmployeeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  openAddModal() {
    this.showAddModal = true;
  }

  closeAddModal() {
    this.showAddModal = false;
    this.resetForm();
  }

  editEmployee(index: number) {
    console.log('Edit employee at index:', index);
  }

  deleteEmployee(index: number) {
    this.employeeService.deleteEmployee(index).subscribe(() => {
      this.employees.splice(index, 1);
    });
  }

  goBack() {
    this.location.back();
  }

  addEmployee() {
    console.log("add employee is called.")
    this.employeeService.addEmployee(this.newEmployee).subscribe((emp) => {
      this.employees.push(emp);
      this.closeAddModal();
    });
  }

  resetForm() {
    this.newEmployee = {
      firstName: '',
      lastName: '',
      email: '',
      department: '',
      designation: '',
      dob: new Date(),
      joiningDate: new Date(),
      salary: 0
    };
  }
}
