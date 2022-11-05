import { Component, Input, OnInit } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo';
import { marcaConteo } from '../../models/marcas-conteo';

@Component({
  selector: 'app-lista-agrupamiento-marca',
  templateUrl: './lista-agrupamiento-marca.component.html',
  styleUrls: ['./lista-agrupamiento-marca.component.css']
})
export class ListaAgrupamientoMarcaComponent implements OnInit {
  @Input("vehiculos") vehiculos: Vehiculo[]=[];
  public marcasAgrupadas: marcaConteo[]=[];
  constructor() { }

  ngOnInit(): void {
      this.agruparConteoMarcas();
  }

  agruparConteoMarcas()
  {
    let marcas = [...new Set(this.vehiculos.map(item => item.marca))];
    for(let marca of marcas )
    {
        let marcaAgrupada= {}  as  marcaConteo;
        marcaAgrupada.marca= marca;
        marcaAgrupada.total=this.vehiculos.filter(m=>m.marca==marca).length;
        this.marcasAgrupadas.push(marcaAgrupada);
    }
    this.marcasAgrupadas= this.marcasAgrupadas.sort((x,y)=>x.total-y.total);
  }
}
