import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from './modules/personas/components/historial/historial.component';
import { PersonasComponent } from './modules/personas/personas.component';
import { VehiculosComponent } from './modules/vehiculos/vehiculos.component';

const routes: Routes = [
  {
    path: '',
    component: PersonasComponent,
    pathMatch: 'full'
  },
  {
    path:'personas/Listar',
    component:PersonasComponent
  },
  {
    path: 'vehiculos',
    component: VehiculosComponent
  },
  {
    path: 'personas/historial/:id',
    component: HistorialComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
