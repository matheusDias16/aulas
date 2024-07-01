import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor() { }


  public authenticate(credentials: TUser): Observable<TUserResponse> {
    return this.http.post<TUserResponse>(
      `${apiUrl}/auth/authenticate`,
      credentials,
      { headers: this.header }
    );
  }
}
