import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillasShellComponent } from './villas-shell/villas-shell.component';
import { VillasListComponent } from './villas-list/villas-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: '',
    component: VillasShellComponent,
    children: [
      { path: 'list', component: VillasListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VillasRoutingModule {}