import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatCardModule,
    MatToolbarModule,
    MatIcon,
    MatMenuModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    MatOptionModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'StInv';
}
