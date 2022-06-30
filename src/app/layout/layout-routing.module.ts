import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotaNuevoComponent } from './mascota-nuevo/mascota-nuevo.component';

const routes: Routes = [
  {
    path: '',
    component: MascotaNuevoComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
