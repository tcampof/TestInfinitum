import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Historial } from 'src/app/core/interface/vehiculo.interface copy';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  public id: any;
  public arrayHistorial: Array<Historial> = [];
  public Nombre : string = '';

  constructor(
    private _personasService: PersonaService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = +this._route.snapshot.params?.id;
    console.log(this.id);
    
    this.obtenerHistorial();
  }

  obtenerHistorial() {
   this._personasService.buscarHistorial(this.id).subscribe(resp => {
     this.arrayHistorial = resp;
     this.Nombre = this.arrayHistorial[0].nombreCompleto
     console.log(this.arrayHistorial);
     
   })
  }

}
