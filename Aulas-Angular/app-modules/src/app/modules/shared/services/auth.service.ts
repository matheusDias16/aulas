import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../../../../environments/environment';

type TUser = {
  email: string,
  password: string
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  header = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  };
  constructor(private http: HttpClient) {}

  public authenticate(credentials: TUser) {
    return this.http.post(
      `${apiUrl}/auth/authenticate`,
      credentials,
      { headers: this.header }
    );
  }
}
