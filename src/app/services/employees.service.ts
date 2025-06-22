import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private mockEmployees: Employee[] = [
    {
      firstName: 'Lynne',
      lastName: 'Norman',
      email: 'lynne.norman@example.com',
      department: 'Design',
      designation: 'Developer',
      dob: new Date('1990-05-21'),
      joiningDate: new Date('2022-01-15'),
      salary: 70000
    },
    {
      firstName: 'Katharine',
      lastName: 'Grant',
      email: 'katharine.grant@example.com',
      department: 'Finance',
      designation: 'Analyst',
      dob: new Date('1988-11-30'),
      joiningDate: new Date('2021-08-10'),
      salary: 65000
    }
  ];

  constructor() {}

  getEmployees(): Observable<Employee[]> {
    return of(this.mockEmployees).pipe(delay(500));
  }

  addEmployee(employee: Employee): Observable<Employee> {
    this.mockEmployees.push(employee);
    return of(employee).pipe(delay(500));
  }

  updateEmployee(index: number, updated: Employee): Observable<Employee> {
    this.mockEmployees[index] = updated;
    return of(updated).pipe(delay(500));
  }

  deleteEmployee(index: number): Observable<boolean> {
    this.mockEmployees.splice(index, 1);
    return of(true).pipe(delay(300));
  }
}
