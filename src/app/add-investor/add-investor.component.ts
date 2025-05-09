import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { InvestorsService } from '../services/investor.service';
import { COUNTRIES } from '../utils/countries';
import { INDUSTRIES } from '../utils/industries';
import { INVESTMENT_SIZE } from '../utils/investment-sizes';

@Component({
  selector: 'app-add-investor',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './add-investor.component.html',
  styleUrls: ['./add-investor.component.css'],
})
export class AddInvestorComponent {
  countries = COUNTRIES;
  industries = INDUSTRIES;
  investmentSizes = INVESTMENT_SIZE;

  investorForm = new FormGroup({
    nameInvestor: new FormControl('', Validators.required),
    overviewInvestor: new FormControl('', Validators.required),
    countryId: new FormControl('', Validators.required),
    industryId: new FormControl('', Validators.required),
    investmentSizeId: new FormControl('', Validators.required),
  });

  constructor(
    private investorsService: InvestorsService,
    private router: Router
  ) {}

  addInvestor() {
    if (this.investorForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    const investor = {
      investorId: 0,
      nameInvestor: String(this.investorForm.get('nameInvestor')?.value),
      overviewInvestor: String(
        this.investorForm.get('overviewInvestor')?.value
      ),
      countryId: Number(this.investorForm.get('countryId')?.value),
      industryId: Number(this.investorForm.get('industryId')?.value),
      investmentSizeId: Number(
        this.investorForm.get('investmentSizeId')?.value
      ),
    };

    console.log('Submitting investor:', investor);

    this.investorsService.addInvestor(investor).subscribe(() => {
      console.log('Investor created');
      this.router.navigate(['/investor']);
    });
  }
}
