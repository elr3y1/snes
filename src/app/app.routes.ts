import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JuegosComponent } from './juegos/juegos.component';
import { AboutComponent } from './about/about.component';
import { KitsComponent } from './kits/kits.component';
import { NasaComponent  } from "./nasa/nasa.component";
import { NasaBuscadorComponent  } from "./nasa-buscador/nasa-buscador.component";
import { SnesComponent } from './snes/snes.component';
import { SupernesComponent } from './supernes/supernes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'juegos', component: JuegosComponent},
  { path: 'about', component: AboutComponent},
  { path: 'kits', component: KitsComponent},
  { path: 'nasa', component: NasaComponent},
  { path: 'nasabuscador', component: NasaBuscadorComponent},
  { path: 'snes', component: SnesComponent},
  { path: 'snes-api', component: SupernesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
