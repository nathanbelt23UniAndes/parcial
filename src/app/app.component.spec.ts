import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { faker } from '@faker-js/faker';
import { AppComponent } from './app.component';

import {  of } from 'rxjs';

import { Vehiculo } from './models/vehiculo';
import { VehiculosService } from './services/vehiculos.service';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let servicio: VehiculosService;



let n=5;
function  datos()
{
  let vehiculos: Vehiculo[]=[];

  for(let i=0; i<n; i++)
  {
    let vehiculo= {}  as Vehiculo;
    vehiculo.id= faker.datatype.number();
    vehiculo.marca= faker.company.bs();
    vehiculo.modelo= faker.datatype.number();
    vehiculo.linea= faker.vehicle.model();
    vehiculo.referencia= faker.vehicle.vin();
    vehiculo.kilometraje=  faker.datatype.number();
    vehiculo.imagen= faker.image.imageUrl();
    vehiculos.push(vehiculo);
  }
return vehiculos;
}

describe('AppComponent', () => {
  beforeEach(async () => {

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    servicio= new VehiculosService(httpClientSpy);
    spyOn(servicio,'obtenerVehiculos' )
     .and.callFake( () => {
       return of( vehiculos );
     });

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers:[VehiculosService]
    }).compileComponents();

    let vehiculos=datos();

  });

  it('se debe crear el app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

  });




  it('get data services vehiculos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.vehiculosService= servicio;
    app.vehiculosService.obtenerVehiculos();
    fixture.detectChanges();
    expect(app.vehiculos.length).toBe(n);
  });



});
