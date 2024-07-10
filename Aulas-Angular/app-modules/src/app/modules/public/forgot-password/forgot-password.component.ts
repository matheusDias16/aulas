import { Component, NgModule, OnInit } from '@angular/core';
import { ForgotPasswordService, TForgotPassword, TAlteraPassword } from '../../shared/services/forgot-password.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';

type Tform = {
  email: FormControl<string | null>,
  senha?: FormControl<string | null>,
  token?: FormControl<string | null>,
}


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})

export class ForgotPasswordComponent implements OnInit {
  public tokenEnviado: boolean = false;
  public trocaTela: boolean = false
  public formGetPasswordFormGroup!: FormGroup<Tform>

  constructor(
    public router: Router,
    private forgotPasswordService: ForgotPasswordService,
  ) { }


  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGetPasswordFormGroup = new FormGroup<Tform>({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  enviarToken() {

    const formValid = this.formGetPasswordFormGroup.status === 'INVALID' ? false : true;

    if (formValid) {

      const payload: TForgotPassword = {
        email: this.formGetPasswordFormGroup.value.email!,
      };

      
      this.forgotPasswordService.forgotPassword(payload).subscribe({
        next: (success) => {
          swal({
            title: "Token enviado!",
            text: success.msg,
            icon: "success",
          });
          
          this.tokenEnviado = true
          
        },
        error: (error) => {
          console.error(error);
          //Caso de erro emitir um alert com icone de erro avisando o usuário para reenviar o email
          //https://sweetalert.js.org/docs/
        }
      });

      

    } else {
      this.formGetPasswordFormGroup.markAllAsTouched();
    }
  }

  trocaSenha() {
    console.log('dados do form', this.formGetPasswordFormGroup.value);

    const formValid = this.formGetPasswordFormGroup.status === 'INVALID' ? false : true;

    if (formValid) {
      console.log("Form emitiu dados", this.formGetPasswordFormGroup.value);

      /* const payload: TAlteraPassword = {
        email: "a.pedreschi32@gmail.com",
        token: "2e92292ace91fd0eaf41bf0536280f5cd6c27018",
        password: "12345678"
      };

      this.forgotPasswordService.trocaPassword(payload).subscribe({
        next: (success) => {
          console.log(success);
          this.router.navigate(['/login'])

        },
        error: (error) => {
          console.error(error)
        }
      }); */

    } else {
      this.formGetPasswordFormGroup.markAllAsTouched();
    }
  }

  checkForm() {
    const formValid = this.formGetPasswordFormGroup.status === 'INVALID' ? false : true;
    const formTouched = this.formGetPasswordFormGroup.touched;
    const buttonDisabled = !formValid && formTouched ? true : false;

    return buttonDisabled;
  }

  validarToken() {
    this.formGetPasswordFormGroup.addControl('senha', new FormControl('', [Validators.required]))
    this.formGetPasswordFormGroup.addControl('token', new FormControl('', [Validators.required]))

    this.trocaTela = true
  }
  
  mudarEmail() {
    this.formGetPasswordFormGroup.removeControl('senha')
    this.formGetPasswordFormGroup.removeControl('token')
    this.trocaTela = false
    this.tokenEnviado = false
  }
}