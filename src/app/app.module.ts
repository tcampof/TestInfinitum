import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PersonasComponent } from './modules/personas/personas.component';
import { VehiculosComponent } from './modules/vehiculos/vehiculos.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HistorialComponent } from './modules/personas/components/historial/historial.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    VehiculosComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
