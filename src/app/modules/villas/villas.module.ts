import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { VillasShellComponent } from "./villas-shell/villas-shell.component";
import { VillasListComponent } from "./villas-list/villas-list.component";
import { VillasRoutingModule } from "./villas-routing.module";

@NgModule({
    declarations: [
        VillasShellComponent,
        VillasListComponent
    ],
    imports: [
      CommonModule,
      VillasRoutingModule
    ]
  })
  
  export class VillsModule {}