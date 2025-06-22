import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-signup.html',
  styleUrl: './login-signup.css',
})
export class LoginSignup implements OnInit{
  authForm!: FormGroup; 
  isLoginMode = true;
  private router = inject(Router);
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.initForm();
  }

    initForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      username: [''] // only used for signup
    });
  }

   toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(): void {
    const { email, password, username } = this.authForm.value;

    if (this.isLoginMode) {
      this.authService.login(email, password).subscribe({
        next:(res) => {
          console.log(this.isLoginMode ? 'Login successful' : 'Signup successful');
          this.router.navigate(['/dashboard']);
        }
      ,
      error : (err) => {
        console.error('Login failed:', err.message);
        alert('User not found. Switching to Sign Up mode.');
       this.isLoginMode = false;
      }
    }
        // (        next: any) => {
        //   console.log(this.isLoginMode ? 'Login successful' : 'Signup successful');
        //   // Navigate to dashboard
        //   next.
        // },
        // (        err: { status: number; }) => {
        //   if (err.status === 404) this.isLoginMode = false; // switch to signup if user not found
        // }
      );
    } else {
      this.authService.signup({ email, password, username }).subscribe(
        (        _response: any) => {
          console.log(this.isLoginMode ? 'Login successful' : 'Signup successful');
          // Navigate to dashboard
        }
      );
    }
  }

}
