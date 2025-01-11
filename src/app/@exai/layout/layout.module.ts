import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {  LayoutComponent } from "./layout.component";
import { RouterModule } from "@angular/router";

@NgModule({
 declarations: [LayoutComponent],
 imports: [CommonModule,  RouterModule],
 exports: [LayoutComponent],
 providers: []
})

export class LayoutModule{}