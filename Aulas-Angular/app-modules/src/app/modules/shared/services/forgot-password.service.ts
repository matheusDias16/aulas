import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../environments/environment';
import { Observable } from 'rxjs';

export type TForgotPassword = {
  email: string
}

export type TAlteraPassword = {
  email: string | null | undefined
  password?: string | null | undefined
  token?: string | null | undefined
}


//criar outro type com email, senha, token todos string

export type TRequestResponse = {
  msg: string
}

export type Tproject = {
  _id: string,
  title: string,
  description: string,
  user: {
    _id: string,
    name: string,
    email: string,
    createdAt: string,
    __v: number
  },
  tasks: {
    _id: string,
    title: string,
    project: string,
    assignedTo: string,
    completed: boolean,
    createdAt: string,
    __v: number,
  }[],
  createdAt: string,
  __v: number
};


@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  header = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken')!)}`,
  };

  constructor(
    private http: HttpClient,
  ) { }

  public forgotPassword(payload: TForgotPassword): Observable<TRequestResponse> {
    return this.http.post<TRequestResponse>(
      `${apiUrl}/auth/forgot_password`,
      payload,
      { headers: this.header }
    );
  }

  public getProjectsByUser(userId: string): Observable<{ projects: Tproject[] }> {
    return this.http.get<{ projects: Tproject[] }>(
      `${apiUrl}/projects?userId=${userId}`,
      { headers: this.header }
    );
  }


  //outra funcao troca senha
}