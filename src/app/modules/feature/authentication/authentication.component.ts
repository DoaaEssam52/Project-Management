import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  title: string = '';
  backgroundImage: string = '';

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    this._auth.authTitle.subscribe({
      next: (title) => (this.title = title),
    });

    this._auth.authBackgroundImage.subscribe({
      next: (backgroundImage) => (this.backgroundImage = backgroundImage),
    });
  }
}
