import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentTilesComponent } from './components/parent-tiles/parent-tiles.component';

const routes: Routes = [
  { path: "", component: ParentTilesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TilesRoutingModule { }
