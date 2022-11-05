import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaVehiculosComponent } from './tabla-vehiculos/tabla-vehiculos.component';
import { ListaAgrupamientoMarcaComponent } from './lista-agrupamiento-marca/lista-agrupamiento-marca.component';



@NgModule({
  declarations: [
    TablaVehiculosComponent,
    ListaAgrupamientoMarcaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TablaVehiculosComponent,
    ListaAgrupamientoMarcaComponent
  ]
})
export class VehiculosModule { }
