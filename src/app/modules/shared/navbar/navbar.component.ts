import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../feature/authentication/services/auth.service';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userProfile!:any
  userName!: string | null;
  userEmail!: string | null;
  
  constructor(private _auth: AuthService, private router: Router,) {
    this._auth.getUserData();
    this.userProfile = _auth.getProfile().subscribe({next:(res)=>{
      this.userProfile = res;
      console.log(this.userProfile , "user profile");
      
    }});
    
   
    
    this.userName = localStorage.getItem('userName');
    this.userEmail = localStorage.getItem('userEmail')
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }
}
