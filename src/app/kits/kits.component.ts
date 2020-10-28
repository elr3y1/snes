import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.css']
})
export class KitsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns:string[]=['copies','description','employee','kit','printTime','station','ACCION' ];

  public data = new MatTableDataSource();

  badge:String;
  userPassword:String;
  texto:String;
  token:String;
  Station:String;
  initialDate:Date;
  finalDate:Date;

  login(){
          this.userPassword=this.userPassword.toUpperCase();
          var value={
            "badge": this.badge,
            "userPassword": this.userPassword
          }
          this.texto= this.badge+'=>'+this.userPassword;
          //alert(JSON.stringify(value));
          this.http.post('http://10.35.64.27:9093/Authentication',value).toPromise().then((response:any)=>{
            this.token=JSON.stringify(response.token);
            //this.texto= '<strong>Name:</strong>'+ JSON.stringify(response.names)+'<br>'+
            this.texto= '<strong>Name:</strong>'+ response.names+'<br>'+
            '<strong>Status:</strong>'+response.userStatusName;
          },( err : HttpErrorResponse)=>{
            //this.messageError(JSON.stringify(err));
            console.log(JSON.stringify(err));
            this.token=null;//limpiar token cuando el usuario es incorrecto
            alert('usuario incorrecto');
          });
    }

    traerDatos(){

      var headers={ 'Authorization': 'Bearer  ' + this.token};
      if(this.Station){
        var url="http://10.35.64.27:9093/api/Record?name="+this.Station;

        if(this.initialDate){
            url+='&initialDate='+(this.initialDate.getMonth()+1)+'/'+this.initialDate.getDate()+'/'+this.initialDate.getFullYear();
        }
         if(this.finalDate)
            url+='&finalDate='+(this.finalDate.getMonth()+1)+'/'+this.finalDate.getDate()+'/'+this.finalDate.getFullYear();


            console.log(url);
            this.http.get(url,{headers}).toPromise().then((respuesta:any)=>{
                if(respuesta.result===0){
                    //console.log(respuesta.data);
                    this.data.data=respuesta.data;
                }
                else{
                  alert('RECORD NOT FOUND!');
                }
            },(error: HttpErrorResponse)=>{
                console.log(JSON.stringify(error));
            });

          }else{
            alert('Introduzca la estation a buscar records!');
          }
      }


      mostrar_datos(row){
        alert(JSON.stringify(row));
      }
}
