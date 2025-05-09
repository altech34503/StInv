import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatCardModule,
    MatToolbarModule,
    MatIcon,
    MatButtonModule,
  ],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {}
