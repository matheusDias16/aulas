import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../../../../environments/environment';
import { Observable } from 'rxjs';


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
export class ProjectService {
  header = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken')!)}`,
  };
  
  constructor(private http: HttpClient) {}

  public getProgectsByUser(userId: string): Observable<{ projects: Tproject[] }> {
    return this.http.get<{ projects: Tproject[] }>(
      `${apiUrl}/projects?userId=${userId}`,
      { headers: this.header }
    );
  }
}
