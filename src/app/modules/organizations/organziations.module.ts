import { NgModule } from "@angular/core";
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { OrganizationShellComponent } from './components/organization-shell/organization-shell.component'
import { OrganizationRoutingModule } from "./organizations-routing";

@NgModule({
  declarations: [
    OrganizationsComponent,
    OrganizationShellComponent
  ],
  imports: [
    OrganizationRoutingModule
  ]
})

export class OrgnanizationsModule {}