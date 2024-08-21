import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { VerifyAccountRequest } from '../models/verify-account-request-model';

import { Endpoints } from 'src/app/core/endpoints';

// The service for authentication-related HTTP requests
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  authTitle = new BehaviorSubject<string>('initial value');
  authBackgroundImage = new BehaviorSubject<string>('initial value');

  // Http Calls
  // Verify account by sending a PUT request
  verifyAccount(form: VerifyAccountRequest): Observable<VerifyAccountRequest> {
    return this._http.put<VerifyAccountRequest>(
      `${Endpoints.baseUrl}${Endpoints.authBaseUrl}${Endpoints.verifyAccount}`,
      form
    );
  }

  // Register a user by sending a POST request with FormData
  fetchRegister(regForm: FormData): Observable<any> {
    return this._http.post('Users/Register', regForm);
  }
}
