import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../environments/environment'; 
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export type TForgotPassword = {
email : string
} 

export type TAlteraPassword = {
  email : string
  password?:string
  token?: string

  } 
//criar outro type com email, senha, token todos string

export type TRequestToken = {
  msg: string
}
@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  header = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  };
  
  constructor(
    public router: Router,
    private http:HttpClient ,
    
  ) {}

  public forgotPassword(payload:TForgotPassword): Observable<TRequestToken> {
    return this.http.post<TRequestToken>(
      `${apiUrl}/auth/forgot_password`,
      payload,
      { headers: this.header }
    );
  }

  public trocaPassword(payload:TAlteraPassword) {
    return this.http.post(
      `${apiUrl}/auth/reset_password`,
      payload,
      { headers: this.header }
    );
  }

  //outra funcao troca senha
}