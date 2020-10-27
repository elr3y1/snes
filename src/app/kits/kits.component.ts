import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.css']
})
export class KitsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  badge:String;
  userPassword:String;
  texto:String;
  token:String;

  login(){
    this.userPassword=this.userPassword.toUpperCase()
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
    });


    }
}
