import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Vehiculo } from 'src/app/core/interface/vehiculo.interface';
import Swal from 'sweetalert2';
import { VehiculoService } from './services/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss'],
})
export class VehiculosComponent implements OnInit {
  public arrayVehiculos: Array<Vehiculo> = [];

  public formGroupVehiculos: FormGroup = new FormGroup({});
  public labelButton = 'Guardar';

  constructor(
    private _vehiculosService: VehiculoService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario() {
    this.obtenerVehiculos();

    this.formGroupVehiculos = this._formBuilder.group({
      placa: [''],
      marca: [''],
      modelo: [''],
      numeroPuertas: [''],
      tipoVehiculo: [''],
      id:[0]
    });
  }

  public obtenerVehiculos(): void {
    this._vehiculosService
      .buscarVehiculos()
      .subscribe((resp) => (this.arrayVehiculos = resp));
  }

  public guardar() {
    let vahiculo: Vehiculo = this.formGroupVehiculos.value;
    if (this.labelButton == 'Guardar') {
      this._vehiculosService.guardarVehiculo(vahiculo).subscribe((resp) => {
        if (resp === 1) {
          Swal.fire({
            toast: true,
            position: 'bottom-end',
            showCancelButton: false,
            showConfirmButton: false,
            timer: 5000,
            background: '#FFFFFF',
            icon: 'success',
            title: 'Registro guardado con éxito',
          });
  
          this.formGroupVehiculos.reset();
          this.iniciarFormulario();
        }
      });
    } else { this._vehiculosService.editarVehiculo(vahiculo).subscribe((resp) => {
      if (resp === 1) {
        Swal.fire({
          toast: true,
          position: 'bottom-end',
          showCancelButton: false,
          showConfirmButton: false,
          timer: 5000,
          background: '#FFFFFF',
          icon: 'success',
          title: 'Registro editado con éxito',
        });

        this.formGroupVehiculos.reset();
        this.iniciarFormulario();
      }
    });
    }
  }

  /**
   * editar
   */
  public editar(event: any, row: any) {
    this.labelButton = 'Editar';
    this.formGroupVehiculos = this._formBuilder.group({
      placa: [row.placa],
      marca: [row.marca],
      modelo: [row.modelo],
      numeroPuertas: [row.numeroPuertas],
      tipoVehiculo: [row.tipoVehiculo],
      id: [row.id],
    });
  }
}
