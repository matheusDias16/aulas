import { Component, NgModule, OnInit } from '@angular/core';
import { ForgotPasswordService, TForgotPassword, TAlteraPassword } from '../../shared/services/forgot-password.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

type Tform = {
  email: FormControl<string>,
  senha?: FormControl<string>,
  token?:  FormControl<string>,
}


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})

export class ForgotPasswordComponent implements OnInit {
  
  public trocaTela: boolean = false
  public formGetPasswordFormGroup!: FormGroup<Tform>
  
  constructor(
    public router: Router,
    private forgotPasswordService: ForgotPasswordService,
  ) { }


  ngOnInit(): void {
    this.createForm();
    
   
  }

  enviarToken() {
    const payload: TForgotPassword = {
      email: 'a.pedreschi32@gmail.com',//
    };

    this.forgotPasswordService.forgotPassword(payload).subscribe({
      next: (success) => {
        console.log(success);
        this.trocaTela = true
        this.formGetPasswordFormGroup.value
       
        ///////add senha e token addControl
        //forms angular add control exemplo

      },
      error: (error) => { }

    });
  }

  trocaSenha() {
    const payload2: TAlteraPassword = {
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
  createForm() {
    this.formGetPasswordFormGroup = new FormGroup<Tform>({
      email: new FormControl('', [Validators.required, Validators.email]),
      //  senha: new FormControl('', [Validators.required, Validators.email]),
      //  token: new FormControl('', [Validators.required, Validators.email]),

    })
  }

  checkForm() {
    const formValid = this.formGetPasswordFormGroup.status === 'INVALID' ? false : true;
    const formTouched = this.formGetPasswordFormGroup.touched;
    const buttonDisabled = !formValid && formTouched ? true : false;

    return buttonDisabled;
  }

  submitForm() {
    const formValid = this.formGetPasswordFormGroup.status === 'INVALID' ? false : true;

    if (formValid) {
      console.log("Form emitiu dados", this.formGetPasswordFormGroup.value);
    } else {
      this.formGetPasswordFormGroup.markAllAsTouched();
    }
  }
}





