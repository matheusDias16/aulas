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
        /* loadChildren: () =>
          import('./login/login.component').then(
            (m) => m.LoginComponent
          ), */
      },
      /* {
        path: 'time-validations',
        loadChildren: () =>
          import('./time-validation/time-validation.module').then(
            (m) => m.TimeValidationModule
          ),
      },
      {
        path: 'billing-releases',
        loadChildren: () =>
          import('./billing-release/billing-release.module').then(
            (m) => m.BillingReleaseModule
          ),
      },
      {
        path: 'billing-email',
        loadChildren: () =>
          import('./billing-email/billing-email.module').then(
            (m) => m.BillingEmailModule
          ),
      },
      {
        path: 'cost-center',
        loadChildren: () =>
          import('./cost-center/cost-center.module').then(
            (m) => m.CostCenterModule
          ),
      },
      {
        path: 'time-histories',
        loadChildren: () =>
          import('./time-history/time-history.module').then(
            (m) => m.TimeHistoryModule
          ),
      },
      {
        path: 'setup',
        loadChildren: () =>
          import('./setup/setup.module').then((m) => m.SetupModule),
      }, */
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
