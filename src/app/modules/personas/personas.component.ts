import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Persona } from 'src/app/core/interface/persona.interface';
import { VehiculoService } from '../vehiculos/services/vehiculo.service';
import { PersonaService } from './services/persona.service';
import Swal from 'sweetalert2';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
})
export class PersonasComponent implements OnInit {
  public arrayPersonas: Array<Persona> = [];
  public arrayVehiculos: Array<any> = [];
  public formGroupPersonas: FormGroup = new FormGroup({});
  public ColumnMode = ColumnMode;
  public labelButton = 'Guardar';

  constructor(
    private _personasService: PersonaService,
    private _vehiculosService: VehiculoService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.iniciarFormulario();
  }
  iniciarFormulario() {
    this.obtenerPersonas();
    this.obtenerVehiculos();

    this.formGroupPersonas = this._formBuilder.group({
      apellidos: [''],
      estadoCivil: [''],
      idVehiculo: [0],
      identificacion: [''],
      ingresosMensuales: [''],
      nombres: [''],
      profesion: [''],
      pLacaVehiculo: [''],
      fechaNacimiento: [''],
      id: [0],
    });
  }

  public obtenerVehiculos(): void {
    this._vehiculosService
      .buscarVehiculos()
      .subscribe((resp) => (this.arrayVehiculos = resp));
  }

  public obtenerPersonas(): void {
    this._personasService
      .buscarPersonas()
      .subscribe((resp) => (this.arrayPersonas = resp));
  }

  public guardar() {
    let persona: Persona = this.formGroupPersonas.value;

    if (this.labelButton == 'Guardar') {
      this._personasService.guardarPersona(persona).subscribe((resp) => {
        if (resp === 1) {
          Swal.fire({
            toast: true,
            position: 'bottom-end',
            showCancelButton: false,
            showConfirmButton: false,
            timer: 5000,
            background: '#FFFFFF',
            icon: 'success',
            title: 'Registro guardado con exito',
          });

          this.formGroupPersonas.reset();
          this.iniciarFormulario();
        }
      });
    } else {
      this._personasService.editarPersona(persona).subscribe((resp) => {
        console.log(resp);
        
        if (resp === 1) {
          Swal.fire({
            toast: true,
            position: 'bottom-end',
            showCancelButton: false,
            showConfirmButton: false,
            timer: 5000,
            background: '#FFFFFF',
            icon: 'success',
            title: 'Registro editado con exito',
          });

          this.formGroupPersonas.reset();
          this.iniciarFormulario();
          this.labelButton = 'Guardar';
        }
      });
    }
  }

  public editar(event: any, row: any): void {
    this.labelButton = 'Editar';
    this.formGroupPersonas = this._formBuilder.group({
      apellidos: [row.apellidos],
      estadoCivil: [row.estadoCivil],
      idVehiculo: [row.idVehiculo],
      identificacion: [row.identificacion],
      ingresosMensuales: [row.ingresosMensuales],
      nombres: [row.nombres],
      profesion: [row.profesion],
      pLacaVehiculo: [row.pLacaVehiculo],
      fechaNacimiento: [row.fechaNacimiento],
      id: [row.id]
    });

  }
}
