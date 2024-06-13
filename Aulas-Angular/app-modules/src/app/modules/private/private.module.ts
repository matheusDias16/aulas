import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateMainLayoutComponent } from './private-main-layout/private-main-layout.component';
import { UserAreaComponent } from './user-area/user-area.component';




@NgModule({
  declarations: [
    PrivateMainLayoutComponent,
    UserAreaComponent
  ],
  imports: [CommonModule, PrivateRoutingModule],
})
export class PrivateModule {}
