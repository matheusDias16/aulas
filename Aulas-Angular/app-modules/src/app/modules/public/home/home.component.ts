import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../shared/services/auth.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(public router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    const payload = {
      email: 'a.pedreschi34@gmail.com',
      password: '12345',
    };
    
    this.authService.authenticate(payload).subscribe({
      next: (success) => { 
        console.log(success);
        
      },
      error: (error) => { }
      
    });
  }
}
