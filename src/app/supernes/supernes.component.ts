import { Component, OnInit } from '@angular/core';
import { Juego } from '../shared/juego';
import { SnesService } from '../shared/snes.service';
import { Router } from "@angular/router";//servira para enviar informacion a about

@Component({
  selector: 'app-supernes',
  templateUrl: './supernes.component.html',
  styleUrls: ['./supernes.component.css']
})
export class SupernesComponent implements OnInit {
  //objeto de tipo juego (interface)
  snes: Juego;
  constructor(private snesApi: SnesService, private r:Router) { }

  ngOnInit(): void {
    this.snesApi.getJuegos()
      .subscribe(data => this.snes = data);
    
  }
  verInfo(element){
    localStorage.setItem('descJuego',element.descripcion);
    localStorage.setItem('tituloJuego',element.titulo);
    localStorage.setItem('subJuego',element.subtitulo);
    localStorage.setItem('imgJuego',element.img);
    this.r.navigate(['/about']);
  }
}
