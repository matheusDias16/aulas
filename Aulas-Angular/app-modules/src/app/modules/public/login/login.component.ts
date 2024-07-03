import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
  
  
export class LoginComponent implements OnInit {
  constructor(
    public router: Router,
    private authService: AuthService
  ) { }
  ngOnInit(): void {

  }

  login() {
    const payload = {
      email: 'a.pedreschi34@gmail.com',
      password: '12345',
    };

    this.authService.authenticate(payload).subscribe({
      next: (success) => {
        console.log(success);

        localStorage.setItem(
          'accessToken',
          JSON.stringify(success.token)
        );
        this.router.navigate(['/user'])
      },
      error: (error) => { }

    });
  }
  
}
