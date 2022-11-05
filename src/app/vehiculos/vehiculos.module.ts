import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaVehiculosComponent } from './tabla-vehiculos/tabla-vehiculos.component';



@NgModule({
  declarations: [
    TablaVehiculosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TablaVehiculosComponent
  ]
})
export class VehiculosModule { }
