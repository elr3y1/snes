import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {

  copyright:String;
  date:String;
  explanation:String;
  hdurl:String;
  media_type:String;
  service_version:String;
  title:String;
  url:String;

  valores:any;
  selectFecha:Date;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-10-27&hd=true').toPromise().then((respuesta:any)=>{
      console.log(respuesta)
      this.copyright=respuesta.copyright;
      this.date=respuesta.date;
      this.explanation=respuesta.explanation;
      this.hdurl=respuesta.hdurl;
      this.media_type=respuesta.media_type;
      this.service_version=respuesta.service_version;
      this.title=respuesta.title;
      this.url=respuesta.url;

      this.valores=respuesta;
    },( err : HttpErrorResponse)=>{
      //this.messageError(JSON.stringify(err));
      console.log(JSON.stringify(err));
      alert(err.error['msg']);
    });
  }
  traerDatos(){
    //condiciono con el if para que no me muestre error si no hay valor asignado en el selectFecha
    if(this.selectFecha){
      var lafecha=this.selectFecha.getFullYear()+'/'+(this.selectFecha.getMonth()+1)+'/'+this.selectFecha.getDate();
      alert(lafecha);

  }
  }
}
