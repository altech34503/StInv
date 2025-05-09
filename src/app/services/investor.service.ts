import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Investor } from '../model/investor';

@Injectable({
  providedIn: 'root',
})
export class InvestorsService {
  private baseUrl = 'http://localhost:5097/api'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Fetch all investors
  getInvestors(): Observable<Investor[]> {
    return this.http.get<Investor[]>(`${this.baseUrl}/investor`);
  }

  // Fetch a single investor by ID
  getInvestorById(id: number): Observable<Investor> {
    return this.http.get<Investor>(`${this.baseUrl}/investor/${id}`);
  }

  // Update an existing investor
  updateInvestor(investor: Investor): Observable<Investor> {
    return this.http.put<Investor>(`${this.baseUrl}/investor`, investor);
  }

  // Add a new investor
  addInvestor(investor: Investor): Observable<Investor> {
    return this.http.post<Investor>(`${this.baseUrl}/investor`, investor);
  }

  // Delete an investor
  deleteInvestor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/investor/${id}`);
  }
}
