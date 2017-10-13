import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Exportamos los componentes para poder establecer las rutas que seguiremos
import {DashboardComponent} from './dashboard/dashboard.component';
import { HeroesComponent} from './heroes.component/heroes.component';
import { HeroDetailComponent} from './hero-detail/hero-detail.component';

//creamos la constante rutas y le asignamos un arreglo de rutas
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
