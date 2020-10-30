import { Component, OnInit } from '@angular/core';
import { Juego } from '../shared/juego';
import { SnesService } from '../shared/snes.service';
import { } from './shared/snes.service'

@Component({
  selector: 'app-snes',
  templateUrl: './snes.component.html',
  styleUrls: ['./snes.component.css']
})
export class SnesComponent implements OnInit {
  snes: Juego;
  constructor(private snesApi: SnesService) { }

  ngOnInit(): void {
    this.snesApi.getJuegos()
    .subscribe((data: Juego) =>{
      this.snes = data;
    });
  }
 
}
