import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../../../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

type TUser = {
  email: string,
  password: string
}
type TUserResponse = {
  user: {
    _id: string,
    name: string,
    email: string,
    createdAt: string,
    __v: number
  },
  token: string,
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  header = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  };
  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) {}

  public isAuthenticated(): boolean {

    const token = localStorage.getItem('accessToken') || ''
    return !this.jwtHelper.isTokenExpired(token)

  }
  
  public authenticate(credentials: TUser): Observable<TUserResponse> {
    return this.http.post<TUserResponse>(
      `${apiUrl}/auth/authenticate`,
      credentials,
      { headers: this.header }
    );
  }
}
