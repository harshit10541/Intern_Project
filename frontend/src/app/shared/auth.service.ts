// frontend/src/app/shared/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'; // tap for side effects like storing token

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:3000/api/auth'; // Adjust if your auth endpoints are different

  constructor(private http: HttpClient) { }

  private handleError(error: any): Observable<never> {
    console.error('Auth API error:', error);
    let errorMessage = 'An authentication error occurred.';
    if (error.error && error.error.message) {
      errorMessage = error.error.message; // Use backend's error message if available
    } else if (error.message) {
      errorMessage = error.message;
    }
    return throwError(() => new Error(errorMessage));
  }

  registerUser(userData: any): Observable<any> {
    // Expected userData: { companyName, email, mobile, password, confirmPassword }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.authUrl}/register`, userData, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // We'll add loginUser next
  loginUser(credentials: any): Observable<any> {
    // Expected credentials: { username, password }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.authUrl}/login`, credentials, { headers }).pipe(
      tap((response: any) => {
        // Assuming your backend sends a JWT token on successful login
        if (response && response.token) {
          localStorage.setItem('authToken', response.token); // Store token
          // You might also store user details: localStorage.setItem('currentUser', JSON.stringify(response.user));
        }
      }),
      catchError(this.handleError)
    );
  }

  // Helper to get token (used by HttpInterceptor later)
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!this.getToken(); // True if token exists
  }

  // Logout user
  logout(): void {
    localStorage.removeItem('authToken');
    // Clear any other user data from localStorage
    // Optionally, redirect to login page
  }
}