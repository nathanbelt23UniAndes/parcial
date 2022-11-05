import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Vehiculo } from '../models/vehiculo';

const urlAPI= environment.baseUrl;
@Injectable({
  providedIn: 'root'
})

export class VehiculosService {
  constructor( private httpCient:HttpClient) { }

  obtenerVehiculos()
  {
    const url =  urlAPI ;
    return this.httpCient.get<Vehiculo[]>( url);
  }
}
