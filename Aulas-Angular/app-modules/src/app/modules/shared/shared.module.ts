import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { CepMaskDirective } from './directives/cep-mask.directive';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarrinhoComponent } from './components/rxjs/carrinho/carrinho.component';
import { SwitchMapComponent } from './components/rxjs/switch-map/switch-map.component';

@NgModule({
  //Declara os componentes que pertencem a esse module
  declarations: [
    ModalDeleteComponent,
    ModalConfirmComponent,
    CepMaskDirective,
    RxjsComponent,
    CarrinhoComponent,
    SwitchMapComponent,
  ],
  // importa tudo que precisa para os componentes desse module funcionar
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  //exportas os componentes criados para poder ser usado em outros lugares da aplicação
  exports: [
    ModalDeleteComponent,
    ModalConfirmComponent,
    CepMaskDirective,
    RxjsComponent,
  ],
})
export class SharedModule {}
