import { AuthService } from '@abp/ng.core';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true
})
export class HomeComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  get hasLoggedIn(): boolean {
    return this.authService.isAuthenticated
  }

  login() {
    this.authService.navigateToLogin();
  }

  register() {
    // Navigate to register page
    window.location.href = '/account/register';
  }

  goToSchedule() {
    this.router.navigate(['/schedule-overview']);
  }
}
