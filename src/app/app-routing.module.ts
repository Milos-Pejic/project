import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponentComponent } from './core/custom-layout-component/custom-layout-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    component: CustomLayoutComponentComponent,
    children : [
     { path: 'organization',
      loadChildren: () => import('./modules/organizations/organziations.module').then((m) => m.OrgnanizationsModule)
     }
    ]
  },
  // { path: '**', redirectTo: 'auth/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
