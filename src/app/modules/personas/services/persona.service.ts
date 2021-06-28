import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from 'src/app/core/interface/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private env = environment.webApi;

  constructor(private _httpBase: HttpClient) { }

  /**
   * buscarPersonas
   */
  public buscarPersonas() : Observable<any> {
    const url = this.env + "personas";
    return this._httpBase.get(url);
  }

  /**
   * guardarPersona
   */
  public guardarPersona(persona: Persona) : Observable<any> {
    const url = this.env + "persona";
    return this._httpBase.post(url, persona);
  }

  /**
   * editarPersona
   */
  public editarPersona(persona: Persona) : Observable<any> {
    const url = this.env + "personaEdit";
    return this._httpBase.post(url, persona);
  }

  
  /**
   * buscarHistorial
   */
   public buscarHistorial(id: number) : Observable<any> {
    const url = this.env + "Historial?id="+id;
    return this._httpBase.get(url);
  }
}
