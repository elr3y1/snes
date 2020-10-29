import { Component, OnInit } from '@angular/core';
//importo el servicio HttpClient para comunicarme con externos
import {HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-nasa-buscador',
  templateUrl: './nasa-buscador.component.html',
  styleUrls: ['./nasa-buscador.component.css']
})
export class NasaBuscadorComponent implements OnInit {
  copyright:String;
  date:String;
  explanation:String;
  hdurl:String;
  media_type:String;
  service_version:String;
  title:String;
  url:String;
  selectFecha:Date;
  mostrarDatos: Boolean;
//agrego al constructor el servicio HttpClient
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  traerDatos(){
    //una condicion que se cumple solo si existe valor en selectFecha
    if(this.selectFecha){
      this.mostrarDatos = true;
      var apiUrl='https://api.nasa.gov/planetary/apod?api_key=xiabVxFWaDebvwAdAscrcWxZ2bgD1wA2qnZhtsKG';
      apiUrl+='&date='+this.selectFecha.getFullYear()+'-'+(this.selectFecha.getMonth()+1)+'-'+this.selectFecha.getDate();
      this.http.get(apiUrl).toPromise().then((respuesta:any)=>{
        console.log(respuesta)
        this.copyright=respuesta.copyright;
        this.date=respuesta.date;
        this.explanation=respuesta.explanation;
        this.hdurl=respuesta.hdurl;
        this.media_type=respuesta.media_type;
        this.service_version=respuesta.service_version;
        this.title=respuesta.title;
        this.url=respuesta.url;
      },( err : HttpErrorResponse)=>{
        //this.messageError(JSON.stringify(err));
        console.log(JSON.stringify(err));
        alert(err.error['msg']);
      });
    }
  }
}