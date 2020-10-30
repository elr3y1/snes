import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JuegosComponent } from './juegos/juegos.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app.routes';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { KitsComponent } from './kits/kits.component';
import { MaterialDesignModule } from './material-design/material-design.module'

//Kits
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Nasa
import { NasaComponent } from './nasa/nasa.component';
import { NasaBuscadorComponent } from './nasa-buscador/nasa-buscador.component';

//Snes
import { SnesComponent } from './snes/snes.component';
import { SnesService } from './shared/snes.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JuegosComponent,
    AboutComponent,
    NavbarComponent,
    KitsComponent,
    NasaComponent,
    NasaBuscadorComponent,
    SnesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialDesignModule
  ],
  providers: [SnesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
