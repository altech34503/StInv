import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MemberService } from '../services/member.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select'; // Required for mat-select
import { MatOptionModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-new-member',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatTooltipModule,
  ],
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
})
export class NewMemberComponent {
  member = {
    memberType: '',
    memberEmail: '',
    memberAddress: '',
    memberPhone: '',
  };
  showSuccessMessage = false;

  constructor(private memberService: MemberService, private router: Router) {}

  createMember() {
    // Simulate form submission
    console.log('Member created:', this.member);

    // Show the success message
    this.showSuccessMessage = true;

    // Optionally, reset the form
    this.member = {
      memberType: '',
      memberEmail: '',
      memberAddress: '',
      memberPhone: '',
    };
  }
}
