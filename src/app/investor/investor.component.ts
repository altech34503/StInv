import { Component, OnInit } from '@angular/core';
import { Investor } from '../model/investor'; // Adjust the path as necessary
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router for navigation
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { InvestorsService } from '../services/investor.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests
import {
  COUNTRY_MAP,
  INDUSTRY_MAP,
  INVESTMENT_SIZE_MAP,
} from '../utils/lookups'; // Import lookup maps

@Component({
  selector: 'app-investor',
  standalone: true,
  imports: [
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
  ], // Import FormsModule for form handling and MatTableModule for table
  providers: [InvestorsService],
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.css'],
})
export class InvestorComponent implements OnInit {
  constructor(
    private investorService: InvestorsService,
    private router: Router
  ) {}

  investor?: Investor[] = []; // Initialize investors as an empty array
  COUNTRY_MAP = COUNTRY_MAP; // Expose the mappings to the template
  INDUSTRY_MAP = INDUSTRY_MAP;
  INVESTMENT_SIZE_MAP = INVESTMENT_SIZE_MAP;

  ngOnInit() {
    if (this.investorService.authHeader == null) {
      this.router.navigate(['login']);
      return;
    }
    this.investorService.getInvestors().subscribe((investors) => {
      console.log('Received investors:', investors);
      this.investor = investors;
    });
  }

  deleteInvestor(id: number): void {
    console.log('Deleting investor with ID:', id); // Log ID being passed
    if (confirm('Are you sure you want to delete this investor?')) {
      this.investorService.deleteInvestor(id).subscribe(() => {
        this.investor = (this.investor ?? []).filter(
          (investor) => investor.investorId !== id
        );
        console.log(`Investor with ID ${id} deleted.`);
      });
    }
  }

  editInvestor(id: number) {
    this.router.navigate(['/edit-investor', id]); // Navigate to the edit investor route with the investor ID
  }

  createInvestor() {
    this.router.navigate(['/add-investor']); // Navigate to the add investor route
  }

  trackByInvestorId(index: number, item: Investor): number {
    return item.investorId;
  }
}
