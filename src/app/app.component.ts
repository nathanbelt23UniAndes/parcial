import { Component, OnInit } from '@angular/core';
import { VehiculosService } from './services/vehiculos.service';
import { Vehiculo } from './models/vehiculo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  public vehiculos:Vehiculo[]=[];

  constructor(public vehiculosService:VehiculosService)
  {


  }

  ngOnInit(): void {
      this.obtenerVehiculos();
  }

  obtenerVehiculos()
  {

    this.vehiculosService.obtenerVehiculos().subscribe(p=>{
      this.vehiculos= p
    });
  }



}
