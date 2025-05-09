import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StartupsService } from '../services/startup.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { COUNTRIES } from '../utils/countries';
import { INDUSTRIES } from '../utils/industries';
import { INVESTMENT_SIZE } from '../utils/investment-sizes';

@Component({
  selector: 'app-add-startup',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './add-startup.component.html',
  styleUrl: './add-startup.component.css',
})
export class AddStartupComponent {
  constructor(
    private startupService: StartupsService,
    private router: Router
  ) {}

  countries = COUNTRIES;
  industries = INDUSTRIES;
  investments = INVESTMENT_SIZE;

  nameStartup = new FormControl('', [Validators.required]);
  overviewStartup = new FormControl('', [Validators.required]);
  countryId = new FormControl('', [Validators.required]);
  industryId = new FormControl('', [Validators.required]);
  investmentSizeId = new FormControl('', [Validators.required]);

  startupForm = new FormGroup({
    nameStartup: this.nameStartup,
    overviewStartup: this.overviewStartup,
    countryId: this.countryId,
    industryId: this.industryId,
    investmentSizeId: this.investmentSizeId,
  });

  addStartup() {
    if (!this.startupForm.valid) {
      console.log('Form data is not valid');
      return;
    }

    this.startupService
      .createStartup({
        startupId: 0,
        nameStartup: this.nameStartup.value!,
        overviewStartup: this.overviewStartup.value!,
        countryId: Number(this.countryId.value!),
        industryId: Number(this.industryId.value!),
        investmentSizeId: Number(this.investmentSizeId.value!),
      })
      .subscribe(() => {
        console.log('Startup created successfully');
        this.router.navigate(['/startup']); // Redirect to the startup list
      });
  }
}
