
//Modules Nos sirve para establecer una coneccione netre cada componente provider o cualquier cosa que tengamos en nuestro proyecto
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroDetailComponent} from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes.component/heroes.component';
import { HeroService} from './hero.service/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [//Aqui se declaran todos los modulos
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [//Importamos cosas adicionales
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [//Bases de Datos
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
