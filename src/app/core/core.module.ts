import { NgModule } from "@angular/core";
import { CustomLayoutComponentComponent } from './custom-layout-component/custom-layout-component.component';
import { RouterModule } from "@angular/router";
import { ToolbarModule } from "../@exai/layout/toolbar/toolbar.module";
import { ExaiModule } from "../@exai/exai.module";

@NgModule({
  declarations: [
    CustomLayoutComponentComponent
  ],
  imports: [
    RouterModule,
    ToolbarModule,
    ExaiModule
  ],
  exports: [
    CustomLayoutComponentComponent
  ]
})

export class CoreModule{}