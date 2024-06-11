import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicMainLayoutComponent } from './public-main-layout/public-main-layout.component';



@NgModule({
  declarations: [LoginComponent, NotFoundComponent, PublicMainLayoutComponent],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
