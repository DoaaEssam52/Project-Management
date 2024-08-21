import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';

import { AuthValidations } from '../../validations/auth-validations';

import { AuthErrorMessages } from '../../validations/auth-error-messages';

import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

import { VerifyAccountRequest } from '../../models/verify-account-request-model';

@Component({
  selector: 'verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss'],
})
export class VerifyAccountComponent {
  public AuthErrorMessages = AuthErrorMessages;

  matcher = new ErrorStateMatcher();

  verifyForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    code: new FormControl('', [
      Validators.required,
      Validators.pattern(AuthValidations.verifyCode.pattern),
    ]),
  });

  constructor(
    private _auth: AuthService,
    private router: Router,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this._auth.authTitle.next('Verify Account');
    this._auth.authBackgroundImage.next('assets/images/bg-3.jpeg');
  }

  submit(): void {
    this.verifyForm.markAllAsTouched();

    if (this.verifyForm.valid) {
      this._auth
        .verifyAccount(this.verifyForm.value as VerifyAccountRequest)
        .subscribe({
          next: () => {
            this._toastr.success('Account created successfully.');

            // this.router.navigateByUrl('/auth/login');
          },
        });
    }
  }
}
