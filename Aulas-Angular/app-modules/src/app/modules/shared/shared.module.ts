import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { CepMaskDirective } from './directives/cep-mask.directive';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarrinhoComponent } from './components/rxjs/carrinho/carrinho.component';
import { SwitchMapComponent } from './components/rxjs/switch-map/switch-map.component';
import { FormsComponent } from './components/forms/forms.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputErrorMessageComponent } from './components/input-error-message/input-error-message.component';
import { CpfDirective } from './directives/cpf.directive';
import { UpperCasePipe } from './pipes/upper-case.pipe';

@NgModule({
  //Declara os componentes que pertencem a esse module
  declarations: [
    ModalDeleteComponent,
    ModalConfirmComponent,
    CepMaskDirective,
    RxjsComponent,
    CarrinhoComponent,
    SwitchMapComponent,
    FormsComponent,
    InputErrorMessageComponent,
    CpfDirective,
    UpperCasePipe,
  ],
  // importa tudo que precisa para os componentes desse module funcionar
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule,],
  //exportas os componentes criados para poder ser usado em outros lugares da aplicação
  exports: [
    ModalDeleteComponent,
    ModalConfirmComponent,
    CepMaskDirective,
    RxjsComponent,
    FormsComponent,
  ],
})
export class SharedModule {}
