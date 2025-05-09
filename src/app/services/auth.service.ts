import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'http://localhost:5097/api';

  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string): Observable<Login> {
    return this.http.post<Login>(`${this.baseUrl}/login`, {
      username: username,
      password: password,
    });
  }
}
