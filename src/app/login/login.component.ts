import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatLabel } from '@angular/material/form-field';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatCardTitle } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatCard,
    MatLabel,
    MatFormField,
    MatCardTitle,
    MatCardContent,
    MatInputModule,
    MatButton,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(public auth: AuthService, private router: Router) {}

  login() {
    if (this.username != null && this.password != null) {
      this.auth.authenticate(this.username, this.password).subscribe((auth) => {
        if (auth != null) {
          localStorage.setItem('headerValue', auth.headerValue);
          this.router.navigate(['']);
        }
      });
    }
  }
}
