import { Component, OnInit } from '@angular/core';
import {Juego} from '../shared/juego';// llamo a la interface Juego

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styles: [
  ]
})
export class JuegosComponent implements OnInit {
  juego1: Juego;// se crea un elemento juego1 que obedece al modelo Juego.
  juego2: Juego;
  juego3: Juego;
  juego4: Juego;
  listaJuegos: Juego[];
  constructor() { }

  ngOnInit(): void {
    console.log('iniciando nuestro componente juegos');
    this.juego1 = {
      titulo: "Castlevania Dracula X",
      subtitulo: "Un super juegazo de plataformas de la saga de Konami.",
      descripcion: `<p>La familia Belmont es famosa por sus habilidades para cazar vampiros y entre sus víctimas está el mismísimo Drácula. Muchas generaciones han pasado y Drácula está de vuelta para cobrar venganza.</p>
      <h3>"Ritcher Belmont recoge el legado de su estirpe para enfrentarse una vez al señor de la oscuridad."</h3>`,
      img: "./assets/imgs/castlevania.jpg"
    };
    this.juego2 = {
        titulo: "Chrono Trigger",
        subtitulo: "El mejor RPG de Super Nintendo.",
        descripcion: `<p>Dragon Quest y Final Fantasy. Precisamente, los creadores de estas dos franquicias, Yuji Horii e Hironobu Sakaguchi, unieron sus fuerzas para dar forma a Chrono Trigger, un título refinó la mayoría de elementos de este tipo de juegos y que, además, contó con el diseño artístico de Akira Toriyama, el autor de manga responsable de Dragon Ball.</p>
        <p>De esta inaudita reunión de talento, que Square bautizó como su “Dream Team”, surgió una memorable aventura de viajes en el tiempo que aún hoy —y con permiso de Final Fantasy VI— es reverenciada como el mejor JRPG de Super Nintendo. Chrono Trigger destacaba por una original narrativa entorno a las causas y los efectos de nuestras acciones, pero también por su sistema de combates, que potenciaba la cooperación entre los personajes.</p>
        <p>Su historia, sus personajes, la banda sonora compuesta por Yasunori Mitsuda y sus 13 finales diferentes convirtieron a Chrono Trigger en un título de culto, un resumen de lo mejor que habían dado los JRPG hasta el momento antes de su salto hacia a los 32 bits.</p>
        <h3>"Chrono Trigger es una memorable aventura de viajes en el tiempo que aún hoy es reverenciada como el mejor JRPG de Super Nintendo"</h3>`,
        img: "./assets/imgs/ctbox_front.jpg"
      };
    this.juego3 = {
        titulo: "Zelda: Link to the Past",
        subtitulo: "Memorable juego de rol, que hoy es un clasico.",
        descripcion: `<p>Una noche, la voz de la princesa Zelda despierta a Link. Decidido a salvar a la princesa de Hyrule, el joven campesino emprende la búsqueda de la espada maestra, que le permitirá derrotar a los que ansían controlar el reino.</p>
        <h3>¡Una nueva historia basada en el héroe más famoso de los videojuegos!</h3>`,
        img: "./assets/imgs/zeldalink.jpg"
      };
    this.juego4 = {
        titulo: "Final Fantasy VI",
        subtitulo: "Cuando las consolas de 16 bits estaban en su máximo apogeo, Squaresoft nos obsequió con Final Fantasy VI, posiblemente uno de los mejores títulos que hayamos jugado nunca.",
        descripcion: `<p>Tiene lugar en un mundo que fue casi destruido hace mil años durante una guerra legendaria que involucró a la magia. A raíz de la guerra, se perdió dicho poder. Como resultado, la gente comenzó a desarrollar tecnología para reemplazar la magia, como el facilitador principal. El mundo tiene una sensación industrial muy lúgubre, con locomotoras, naves aéreas tipo zeppelin y mechas pesados. En este mundo steampunk existe un poderoso imperio que acumula fuerza y ​​expande su alcance en un intento de dominarlos a todos. Por supuesto, un imperio dominante necesita más que tecnología para afirmar su dominio sobre las masas, por lo que el emperador Gestahl decide revivir la magia y usarla como fuente de poder supremo.</p>
        <h3>"Final Fantasy VI es una entrega que tiene todos los elementos para merecer el estatus que tiene: el mejor de la serie."</h3>`,
        img: "./assets/imgs/finalfantasy3.jpg"
      };

    this.listaJuegos = [this.juego1,this.juego2,this.juego3,this.juego4]
  
  }

}
