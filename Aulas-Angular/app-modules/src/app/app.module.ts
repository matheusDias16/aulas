import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './modules/public/public.module';
import { PrivateModule } from './modules/private/private.module';
import { SharedModule } from './modules/shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    PrivateModule,
    SharedModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }