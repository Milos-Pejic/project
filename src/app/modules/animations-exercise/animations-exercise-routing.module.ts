import { RouterModule, Routes } from "@angular/router";
import { AnimationsExerciseComponent } from "./components/animations-exercise/animations-exercise.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'exercise',
        pathMatch: 'full',

    },
    {
        path: 'exercise',
        component: AnimationsExerciseComponent,
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class AnimationsRoutingModule{}