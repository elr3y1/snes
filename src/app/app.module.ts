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
import { NasaComponent } from './nasa/nasa.component';
import { NasaBuscadorComponent } from './nasa-buscador/nasa-buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JuegosComponent,
    AboutComponent,
    NavbarComponent,
    KitsComponent,
    NasaComponent,
    NasaBuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
