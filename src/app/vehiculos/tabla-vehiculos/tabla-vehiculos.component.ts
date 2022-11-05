import { Component, Input, OnInit } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo';

@Component({
  selector: 'app-tabla-vehiculos',
  templateUrl: './tabla-vehiculos.component.html',
  styleUrls: ['./tabla-vehiculos.component.css']
})
export class TablaVehiculosComponent implements OnInit {

  @Input("vehiculos") vehiculos: Vehiculo[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
