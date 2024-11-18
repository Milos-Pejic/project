import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { VillasShellComponent } from "./villas-shell/villas-shell.component";
import { VillasListComponent } from "./villas-list/villas-list.component";
import { VillasRoutingModule } from "./villas-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from '@angular/material/table';
import { VillasService } from "./villas.service";
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    declarations: [
        VillasShellComponent,
        VillasListComponent
    ],
    imports: [
      CommonModule,
      VillasRoutingModule,
      HttpClientModule,
      MatTableModule,
      MatTooltipModule
    ],
    providers:[VillasService]
  })
  
  export class VillsModule {}