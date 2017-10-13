import { Injectable } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes.component';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {//Metodo que devuelve un arreglo de Heroes como lo dice explicitamente
    return Promise.resolve(HEROES);
  }

  // See the "Take it slow" appendix
  getHeroesSlowly(): Promise<Hero[]> {//Metodo que regresa un arreglo de heroes pero usa la funcion setTime para hacerlo un poco mas lento
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
