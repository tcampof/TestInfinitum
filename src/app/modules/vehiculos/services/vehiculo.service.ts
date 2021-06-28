import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehiculo } from 'src/app/core/interface/vehiculo.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private env = environment.webApi;

  constructor(private _httpBase: HttpClient) { }

  /**
   * buscarVehiculos
   */
  public buscarVehiculos() : Observable<any> {
    const url = this.env + "vehiculos";
    return this._httpBase.get(url);
  }

  
  /**
   * guardarVehiculo
   */
   public guardarVehiculo(vehiculo: Vehiculo) : Observable<any> {
    const url = this.env + "vehiculo";
    return this._httpBase.post(url, vehiculo);
  }

  /**
   * editarPersona
   */
  public editarVehiculo(vehiculo: Vehiculo) : Observable<any> {
    const url = this.env + "vehiculoEditar";
    return this._httpBase.post(url, vehiculo);
  }
}
