import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Juego} from '../shared/juego';// llamo a la interface Juego
import { Observable } from 'rxjs/Observable';

//defino una constante para la url del api
const SNES_URL = 'https://snes-2f4c9.firebaseio.com/snes.json';

@Injectable({
  providedIn: 'root'
})
export class SnesService {
  
  //Inyeccion de dependencia: httpClient (retornan todos observables) 
  constructor(private http:HttpClient) { }

  getJuegos():Observable<Juego>{
    //tipo de dato que deseo recibir: <juego>, retorno el resultado de la siguiente funcion. 
    return this.http.get<Juego>(SNES_URL);
  }
}


