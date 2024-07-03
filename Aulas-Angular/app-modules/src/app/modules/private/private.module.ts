import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateMainLayoutComponent } from './private-main-layout/private-main-layout.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    PrivateMainLayoutComponent,
    UserAreaComponent,
  ],
  imports: [CommonModule, PrivateRoutingModule, SharedModule],
})
export class PrivateModule {}
