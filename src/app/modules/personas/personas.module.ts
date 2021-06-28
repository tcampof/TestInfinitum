import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule
  ]
})
export class PersonasModule { }
