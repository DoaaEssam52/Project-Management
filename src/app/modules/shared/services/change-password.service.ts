import { observable } from './../../../../../node_modules/rxjs/src/internal/symbol/observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChangePasswordService {
  constructor(private _HttpClient: HttpClient) {}
  changePassword(data: FormGroup):Observable<any> {
    return this._HttpClient.put('Users/ChangePassword', data);
  }
}
