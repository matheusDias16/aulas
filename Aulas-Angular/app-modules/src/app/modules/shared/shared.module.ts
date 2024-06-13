import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { CepMaskDirective } from './directives/cep-mask.directive';



@NgModule({
  declarations: [ModalDeleteComponent, ModalConfirmComponent, CepMaskDirective],
  imports: [CommonModule],
})
export class SharedModule {}
