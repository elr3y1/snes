import { Component, OnInit } from '@angular/core';
import { Juego } from '../shared/juego';
import { SnesService } from '../shared/snes.service';
import { Router } from "@angular/router";//servira para enviar informacion a about


@Component({
  selector: 'app-snes',
  templateUrl: './snes.component.html',
  styleUrls: ['./snes.component.css']
})
export class SnesComponent implements OnInit {
  snes: Juego[];//entre corchetes para llamar array
  constructor(private snesApi: SnesService, private r:Router) { }

  ngOnInit(): void {


      this.snes =[ {
        titulo: "Castlevania Dracula X",
        subtitulo: "Un super juegazo de plataformas de la saga de Konami.",
        descripcion: `<p>La familia Belmont es famosa por sus habilidades para cazar vampiros y entre sus víctimas está el mismísimo Drácula. Muchas generaciones han pasado y Drácula está de vuelta para cobrar venganza.</p>
        <h3>"Ritcher Belmont recoge el legado de su estirpe para enfrentarse una vez al señor de la oscuridad."</h3>`,
        img: "./assets/imgs/castlevania.jpg"
      },
      {
          titulo: "Chrono Trigger",
          subtitulo: "El mejor RPG de Super Nintendo.",
          descripcion: `<p>Dragon Quest y Final Fantasy. Precisamente, los creadores de estas dos franquicias, Yuji Horii e Hironobu Sakaguchi, unieron sus fuerzas para dar forma a Chrono Trigger, un título refinó la mayoría de elementos de este tipo de juegos y que, además, contó con el diseño artístico de Akira Toriyama, el autor de manga responsable de Dragon Ball.</p>
          <p>De esta inaudita reunión de talento, que Square bautizó como su “Dream Team”, surgió una memorable aventura de viajes en el tiempo que aún hoy —y con permiso de Final Fantasy VI— es reverenciada como el mejor JRPG de Super Nintendo. Chrono Trigger destacaba por una original narrativa entorno a las causas y los efectos de nuestras acciones, pero también por su sistema de combates, que potenciaba la cooperación entre los personajes.</p>
          <p>Su historia, sus personajes, la banda sonora compuesta por Yasunori Mitsuda y sus 13 finales diferentes convirtieron a Chrono Trigger en un título de culto, un resumen de lo mejor que habían dado los JRPG hasta el momento antes de su salto hacia a los 32 bits.</p>
          <h3>"Chrono Trigger es una memorable aventura de viajes en el tiempo que aún hoy es reverenciada como el mejor JRPG de Super Nintendo"</h3>`,
          img: "./assets/imgs/ctbox_front.jpg"
        },
      {
          titulo: "Zelda: Link to the Past",
          subtitulo: "Memorable juego de rol, que hoy es un clasico.",
          descripcion: `<p>Una noche, la voz de la princesa Zelda despierta a Link. Decidido a salvar a la princesa de Hyrule, el joven campesino emprende la búsqueda de la espada maestra, que le permitirá derrotar a los que ansían controlar el reino.</p>
          <h3>¡Una nueva historia basada en el héroe más famoso de los videojuegos!</h3>`,
          img: "./assets/imgs/zeldalink.jpg"
        },
        {
          titulo: "Final Fantasy VI",
          subtitulo: "Cuando las consolas de 16 bits estaban en su máximo apogeo, Squaresoft nos obsequió con Final Fantasy VI, posiblemente uno de los mejores títulos que hayamos jugado nunca.",
          descripcion: `<p>Tiene lugar en un mundo que fue casi destruido hace mil años durante una guerra legendaria que involucró a la magia. A raíz de la guerra, se perdió dicho poder. Como resultado, la gente comenzó a desarrollar tecnología para reemplazar la magia, como el facilitador principal. El mundo tiene una sensación industrial muy lúgubre, con locomotoras, naves aéreas tipo zeppelin y mechas pesados. En este mundo steampunk existe un poderoso imperio que acumula fuerza y ​​expande su alcance en un intento de dominarlos a todos. Por supuesto, un imperio dominante necesita más que tecnología para afirmar su dominio sobre las masas, por lo que el emperador Gestahl decide revivir la magia y usarla como fuente de poder supremo.</p>
          <h3>"Final Fantasy VI es una entrega que tiene todos los elementos para merecer el estatus que tiene: el mejor de la serie."</h3>`,
          img: "./assets/imgs/finalfantasy3.jpg"
        },
        {
          titulo: "Super Mario World",
          subtitulo: "el primer juego protagonizado por Mario para SNES y que recoge el debut de Yoshi",
          descripcion: `<p>En conclucion Super Mario World es un juego exelente, quizas la historia no es la mas original en la saga de Mario, pero todo lo demas es bellisimo, los "Mundos", los nuevos Power-Ups, los jefes, los niveles y los enemigos, todo es hermoso y genial.</p>`,
          img: "./assets/imgs/mario.jpg"
        },
        {
          titulo: "Contra III: The Alien Wars",
          subtitulo: "tenía todo lo que necesitaba un juego para convertirse en leyenda: inmejorable acción, muy buenas armas, buenas gráficas, buen sonido y un modo cooperativo.",
          descripcion: `<p>La historia del juego se lleva a cabo 2 años después de los eventos ocurridos en Super Contra, en el año 2636, en donde los aliens, comandados por el Halcón Rojo (Red Falcon) atacan la Tierra en gran escala. Nuestros amigos son enviados para acabar con el Halcón Rojo.
          Este juego contaba con 2 modos, uno en el que tú sólo tenías que enfrentarte a los peligros de Neo City y otro en el que podías invitar a un cuate para que te ayudara a pasar tu difícil misión. Contabas también con una opción con la cual podías agregarte o quitarte más vidas, esto era para aumentar o disminuir el nivel de dificultad, que por cierto es bastante alto, por suerte, no llega a ser frustrante.</p>`,
          img: "./assets/imgs/contra3.jpg"
        }
      ];
  }
  verInfo(element){
    localStorage.setItem('descJuego',element.descripcion);
    localStorage.setItem('tituloJuego',element.titulo);
    localStorage.setItem('subJuego',element.subtitulo);
    localStorage.setItem('imgJuego',element.img);
    this.r.navigate(['/about']);
  }

}
