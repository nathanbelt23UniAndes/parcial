import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVehiculosComponent } from './tabla-vehiculos.component';
import { Vehiculo } from '../../models/vehiculo';
import { faker } from '@faker-js/faker';

describe('TablaVehiculosComponent', () => {
  let component: TablaVehiculosComponent;
  let fixture: ComponentFixture<TablaVehiculosComponent>;
  let n=3;
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


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaVehiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaVehiculosComponent);
    component = fixture.componentInstance;
    component.vehiculos= datos();
    fixture.detectChanges();

  });

  it('se debe crear  la tabla', () => {
    expect(component).toBeTruthy();
  });
  it('se dibujan '+(n+1)+' tr ioncluida la del encabezado ', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('tr')?.length).toBe(n+1);
  });


});
