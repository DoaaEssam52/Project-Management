import { Component } from '@angular/core';
import { AuthService } from '../../feature/authentication/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userName!: string | null;

  constructor(private _auth: AuthService) {
    this._auth.getProfile();

    this.userName = localStorage.getItem('userName');
  }
}
