import { NgModule } from "@angular/core";
import { CustomLayoutComponentComponent } from './custom-layout-component/custom-layout-component.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    CustomLayoutComponentComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    CustomLayoutComponentComponent
  ]
})

export class CoreModule{}