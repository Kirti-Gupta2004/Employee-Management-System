import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  private dummyUser = {
    email: 'john@example.com',
    password: 'admin123',
    username: 'john'
  };

  constructor(private http: HttpClient) {}

  // login(email: string, password: string): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/login`, { email, password });
  // }

  // signup(user: { email: string; password: string; username: string }): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/signup`, user);
  // }

  login(email: string, password: string): Observable<any> {
    if (email === this.dummyUser.email && password === this.dummyUser.password) {
      return of({ message: 'Login successful', user: this.dummyUser });
    } else {
      return throwError(() => new Error('Invalid credentials'));
    }
  }

  signup(user: { email: string; password: string; username: string }): Observable<any> {
    this.dummyUser = user; // Save user in memory
    return of({ message: 'Signup successful', user });
  }
}
