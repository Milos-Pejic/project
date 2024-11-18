import { NgModule } from "@angular/core";
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { OrganizationShellComponent } from './components/organization-shell/organization-shell.component'
import { OrganizationRoutingModule } from "./organizations-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    OrganizationsComponent,
    OrganizationShellComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
  ]
})

export class OrganizationsModule {}