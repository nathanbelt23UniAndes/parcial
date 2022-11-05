import { Component, OnInit } from '@angular/core';
import { VehiculosService } from './services/vehiculos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'parcial';

  constructor()
  {


  }

  ngOnInit(): void {

  }



}
