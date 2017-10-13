import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero} from '../hero';
import { HeroService} from '../hero.service/hero.service';

@Component({
  selector: 'app-my-heroes', //'app-heroes.component'
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {//implementa la interface OnInit ya que
  heroes: Hero[];//Declaramos el arreglo  Hero
  selectedHero: Hero; // declaramos la variable de tipo Hero

  constructor(
    private router: Router,//Declaramos el constructor  con 2 variables privadas  y las igualamos
    private heroService: HeroService) { }// ha Router y El servicio Hero

  getHeroes(): void {//Funcion que nos regresa todos los super heroes con el servicio
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {//Funcion que nos regresa los superheroes
    this.getHeroes();
  }

  onSelect(hero: Hero): void {//Funcion que nos regresa el heroe seleccionado
    this.selectedHero = hero;
  }

  gotoDetail(): void {//Funcion que nos regresa el Hero Id
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
