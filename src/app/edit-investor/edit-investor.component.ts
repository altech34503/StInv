import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InvestorsService } from '../services/investor.service';
import { Investor } from '../model/investor'; // Ensure this model exists
import { NgForm } from '@angular/forms'; // For handling forms
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { COUNTRIES } from '../utils/countries';
import { INDUSTRIES } from '../utils/industries';
import { INVESTMENT_SIZE } from '../utils/investment-sizes';

@Component({
  selector: 'app-edit-investor',
  templateUrl: './edit-investor.component.html',
  styleUrls: ['./edit-investor.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
  ],
})
export class EditInvestorComponent implements OnInit {
  @Input() id!: number; // Input property to receive the investor ID
  investor: any = {}; // Initialize investor as an empty object
  countries = COUNTRIES; // Use the imported list of countries
  industries = INDUSTRIES; // Use the imported list of industries
  investments = INVESTMENT_SIZE; // Use the imported list of investment sizes

  constructor(
    private investorService: InvestorsService,
    private router: Router
  ) {}

  ngOnInit() {
    // Fetch the investor details by ID
    this.investorService.getInvestorById(this.id).subscribe((investor) => {
      this.investor = investor;
    });
  }

  updateInvestor(investorForm: NgForm) {
    if (investorForm.invalid) {
      console.warn('Form is invalid');
      return;
    }

    // Update the investor details
    this.investorService.updateInvestor(this.investor).subscribe(() => {
      this.router.navigate(['/investor']); // Navigate back to the list of investors
    });
  }
}
