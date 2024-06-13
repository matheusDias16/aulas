import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicMainLayoutComponent } from './public-main-layout/public-main-layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: PublicMainLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
