import { ComponentFixture, TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker';
import { Vehiculo } from 'src/app/models/vehiculo';
import { ListaAgrupamientoMarcaComponent } from './lista-agrupamiento-marca.component';

function  datos()
{
  let vehiculos: Vehiculo[]=[];
  let marcas=["Nissan","BMW" , "Kia"];


  for(let marcaNombre of marcas)
  {
  for(let i=0; i<faker.datatype.number({min:1, max:5}); i++)
  {
    let vehiculo= {}  as Vehiculo;
    vehiculo.id= faker.datatype.number();
    vehiculo.marca= marcaNombre;
    vehiculo.modelo= faker.datatype.number();
    vehiculo.linea= faker.vehicle.model();
    vehiculo.referencia= faker.vehicle.vin();
    vehiculo.kilometraje=  faker.datatype.number();
    vehiculo.imagen= faker.image.imageUrl();
    vehiculos.push(vehiculo);
  }
}
return vehiculos;
}

describe('ListaAgrupamientoMarcaComponent', () => {
  let component: ListaAgrupamientoMarcaComponent;
  let fixture: ComponentFixture<ListaAgrupamientoMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAgrupamientoMarcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAgrupamientoMarcaComponent);
    component = fixture.componentInstance;
    component.vehiculos= datos();
    fixture.detectChanges();
  });

  it('se debe crear  la lista', () => {
    expect(component).toBeTruthy();
  });


  it('se dibujan li por cada item agrupado ', () => {
    component = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;
    console.table(component.marcasAgrupadas);
    console.table(component.vehiculos);
    expect(compiled.querySelectorAll('li')?.length).toBe(component.marcasAgrupadas.length+1);

  });

});
