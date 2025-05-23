import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../model/member';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl = 'http://localhost:5097/api'; // Base URL for the API
  public username = 'john.doe';
  public password = 'VerySecret!';

  // Method to encode credentials as Base64 and return the Authorization header
  public get authHeader(): string {
    const credentials = `${this.username}:${this.password}`;
    const encodedCredentials = btoa(credentials); // Base64 encode
    return `Basic ${encodedCredentials}`;
  }
  constructor(private http: HttpClient) {}

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.baseUrl}/member`, {
      headers: {
        Authorization: this.authHeader,
      },
    }); // Fetch all members
  }

  getMemberById(id: number): Observable<Member> {
    return this.http.get<Member>(`${this.baseUrl}/member/${id}`); // Fetch a member by ID
  }

  createMember(member: Member): Observable<Member> {
    return this.http.post<Member>(`${this.baseUrl}/member`, member, {
      headers: {
        Authorization: this.authHeader,
      },
    }); // Create a new member
  }

  deleteMember(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/member/${id}`, {
      headers: {
        Authorization: this.authHeader,
      },
    }); // Delete a member by ID
  }
  updateMember(member: Member): Observable<Member> {
    return this.http.put<Member>(`${this.baseUrl}/member/`, member, {
      headers: {
        Authorization: this.authHeader,
      },
    }); // Update a member by ID
  }
}
