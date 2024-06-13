import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateMainLayoutComponent } from './private-main-layout/private-main-layout.component';
import { UserAreaComponent } from './user-area/user-area.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateMainLayoutComponent,
    children: [
      {
        path: 'user',
        component: UserAreaComponent
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
