import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicMainLayoutComponent } from './public-main-layout/public-main-layout.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';


import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [LoginComponent, NotFoundComponent, PublicMainLayoutComponent, HomeComponent, SignUpComponent],
  imports: [CommonModule, PublicRoutingModule,MatInputModule,MatSelectModule,MatFormFieldModule,MatButtonModule],
})
export class PublicModule {}
