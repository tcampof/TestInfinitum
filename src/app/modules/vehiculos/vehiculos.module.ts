import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { CrearVehiculoComponent } from './components/crear-vehiculo/crear-vehiculo.component';


@NgModule({
  declarations: [
    CrearVehiculoComponent
  ],
  imports: [
    CommonModule,
    VehiculosRoutingModule
  ]
})
export class VehiculosModule { }
