import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service/hero.service';//Exportamos el servicio qe usaremos para esta
//Extraer la informacion

@Component({
  selector: 'app-root',//'app-my-heroes'
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Tour of Heroes';

}
