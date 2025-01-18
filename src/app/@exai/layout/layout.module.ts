import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {  LayoutComponent } from "./layout.component";
import { RouterModule } from "@angular/router";
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
 declarations: [LayoutComponent],
 imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule
],
 exports: [LayoutComponent],
 providers: []
})

export class LayoutModule{}