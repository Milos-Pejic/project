import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponentComponent } from './core/custom-layout-component/custom-layout-component.component';
import { OrganizationShellComponent } from './modules/organizations/components/organization-shell/organization-shell.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  // { path: 'organization/selection', component: OrganizationShellComponent },
  {
    path: 'auth',
    loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    component: CustomLayoutComponentComponent,
    children : [
     { 
      path: 'organization',
      loadChildren: () => import('./modules/organizations/organziations.module').then((m) => m.OrganizationsModule)
     },
     { 
      path: 'animations',
      loadChildren: () => import('./modules/animations-exercise/animations-exercise.module').then((m) => m.AnimationsExerciseModule)
     },
     { 
      path: 'villas',
      loadChildren: () => import('./modules/villas/villas.module').then((m) => m.VillsModule)
     },
    ]
  },
  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
