import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AppConstants } from '../../constants/app.constants';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private loginApiURL = AppConstants.LOGIN_URL;
  private registerApiURL = AppConstants.REGISTER_URL
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(email: string, password: string) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    return this.http.post(this.loginApiURL, formData)
      .pipe(catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    let message = 'An unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      message = `Client-side Error: ${error.error.message}`;
    } else {
      if (error.error && error.error.message) {
        message = `Server-side Error: ${error.error.message}`;
        if (error.error.details) {
          message += `\nDetails: ${error.error.details}`;
        }
      } else {
        message = `Server-side Error: ${error.status} - ${error.statusText}`;
      }
    }
    return throwError(() => new Error(message));
  }

  saveUserData(data: any): void {
    localStorage.setItem('userData', JSON.stringify(data));
  }

  getUserData(): any {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }

  logout(): void {
    localStorage.removeItem('userData'); // Clear user data from local storage
    localStorage.removeItem('jwtToken'); // Clear JWT token
  }

  saveToken(jwtToken: string): void {
    this.cookieService.set('jwtToken', jwtToken, 1, '/');
  }

  getCredentials() {
    return environment.credentials;
  }

  getApiUrl() {
    return environment.apiUrl;
  }

}
