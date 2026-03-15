import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../../core/services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';

  onLogin(): void {
    const succes = this.authService.login(this.email, this.password);

    if (succes) {
      this.router.navigate(['/themes']);
    } else {
      alert('Invalid credentilas');
    }
  }
}
