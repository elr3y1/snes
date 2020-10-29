import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JuegosComponent } from './juegos/juegos.component';
import { AboutComponent } from './about/about.component';
import { KitsComponent } from './kits/kits.component';
import { NasaComponent  } from "./nasa/nasa.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'juegos', component: JuegosComponent},
  { path: 'about', component: AboutComponent},
  { path: 'kits', component: KitsComponent},
  { path: 'nasa', component: NasaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
