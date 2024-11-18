import { NgModule } from "@angular/core";
import { AnimationsExerciseComponent } from "./components/animations-exercise/animations-exercise.component";
import { AnimationsRoutingModule } from "./animations-exercise-routing.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AnimationsExerciseComponent
      ],
      imports: [
        CommonModule,
        AnimationsRoutingModule,
        FormsModule
      ]
})



export class AnimationsExerciseModule {}