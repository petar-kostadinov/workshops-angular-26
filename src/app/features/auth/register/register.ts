import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth';
import { UserService } from '../../../core/services/user';
import { User } from '../../../shared/interfaces/user';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
  private router = inject(Router);
  private authService = inject(AuthService);
  private userService = inject(UserService);

  username = '';
  email = '';
  tel = '';
  password = '';
  repassword = '';

  onRegister(): void {
    if (!this.email) {
      alert('Email is requred');
      return;
    }

    if (!this.password) {
      alert('Password is requred');
      return;
    }

    if (this.repassword !== this.password) {
      alert('Password dont match');
      return;
    }

    const newUser = {
      _id: this.generateId(),
      username: this.username,
      email: this.email,
      tel: "+359" + this.tel,
      password: this.password
    }

    //const sessionUser = this.userService.register(newUser);
    //this.authService.setSession(sessionUser);
    this.router.navigate(['/themes']);
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
