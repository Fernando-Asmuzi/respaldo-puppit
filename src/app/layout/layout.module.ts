import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { MascotaNuevoComponent } from './mascota-nuevo/mascota-nuevo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MascotasService } from '../services/mascotas.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    MascotaNuevoComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MascotasService,
  ]
})
export class LayoutModule { }
