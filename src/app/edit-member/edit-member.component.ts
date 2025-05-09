import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../model/member';
import { MemberService } from '../services/member.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-edit-member',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIcon,
    MatMenuModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
  ],
  templateUrl: './edit-member.component.html',
  styleUrl: './edit-member.component.css',
})
export class EditMemberComponent implements OnInit {
  @Input() id!: number; // Member ID to be edited
  member!: Member; // Member object to be edited
  constructor(private memberService: MemberService, private router: Router) {}

  ngOnInit(): void {
    this.memberService.getMemberById(this.id).subscribe((member) => {
      this.member = member; // Fetch the member details by ID
    });
  }

  updateMember(): void {
    this.memberService.updateMember(this.member).subscribe(); // Log success message
  }
}
