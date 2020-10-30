import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  _Descripcion:String;
  _Img:String;
  _Titulo:String;
  _Sub:String;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('imgJuego')){
    this._Descripcion=localStorage.getItem('descJuego');
    this._Img=localStorage.getItem('imgJuego');
    this._Titulo=localStorage.getItem('tituloJuego');
    this._Sub=localStorage.getItem('subJuego');
  }else{
    alert("no encontro nada");
  }
  }
  ngOnDestroy(): void {
    localStorage.removeItem('descJuego');
    localStorage.removeItem('imgJuego');
    localStorage.removeItem('tituloJuego');
    localStorage.removeItem('subJuego');
  }

}
