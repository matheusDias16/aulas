import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService , TForgotPassword, TAlteraPassword} from '../../shared/services/forgot-password.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit {

public trocaTela : boolean = false

  constructor(
    public router: Router,
    private forgotPasswordService: ForgotPasswordService,
  ) {}


  ngOnInit(): void {

  }

  enviarToken() {
    const payload : TForgotPassword = {
      email: 'a.pedreschi32@gmail.com',
    };

    this.forgotPasswordService.forgotPassword(payload).subscribe({
      next: (success) => {
        console.log(success);
        this.trocaTela = true

      },
      error: (error) => { }

    });
  }

  trocaSenha() {
    const payload2 : TAlteraPassword = {
     email: "a.pedreschi32@gmail.com",
	   token: "2e92292ace91fd0eaf41bf0536280f5cd6c27018",
	   password: "12345678"
    };

    this.forgotPasswordService.trocaPassword(payload2).subscribe({
      next: (success) => {
        console.log(success);
        this.router.navigate(['/login'])

      },
      error: (error) => { }

    });
  }
  
}
//quando cai next vai pra tela login this.router.navigate





