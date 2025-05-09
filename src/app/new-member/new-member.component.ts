import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MemberService } from '../services/member.service';
import { Member } from '../model/member';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select'; // Required for mat-select
import { MatOptionModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-add-member',
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
  styleUrl: './new-member.component.css',
})
export class NewMemberComponent {
  member: Member = {
    memberId: 0,
    memberType: 'Investor',
    memberEmail: '',
    memberAddress: '',
    memberPhone: '',
  };

  constructor(private memberService: MemberService, private router: Router) {}

  createMember() {
    // All fields are already validated in the template
    console.log('Form Submitted:', this.member);

    this.memberService.createMember(this.member).subscribe(
      (response) => {
        console.log('Member added successfully:', response);
        this.router.navigate(['/member']);
      },
      (error) => {
        console.error('Error adding member:', error);
      }
    );
  }
}
