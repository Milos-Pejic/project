import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { OrganizationShellComponent } from './components/organization-shell/organization-shell.component';
const routes: Routes = [
  { path: '', redirectTo: 'selection', pathMatch: 'full' },
  {
    path: '',
    component: OrganizationShellComponent,
    children: [
      { path: 'selection', component: OrganizationsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizationRoutingModule {}
