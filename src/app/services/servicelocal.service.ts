import { Injectable } from '@angular/core';
import { Miembros } from '../interfaces/interfaceMiembros';
import {Http, Headers} from '@angular/http';

@Injectable()
export class ServicelocalService {

  miembros: any[] = [];

  constructor(public _http : Http ) {
this.miembros = [
        {
        id:"1",
        title: "Titulo1",
        body: "hola soy el body numero 1",
        url:"",
        thumbnailUrl:"",
        colorFondo:"orange",
        imgPerfil:"1"
      },
        {
        id:"2",
        title: "Titulo2",
        body: "hola soy el body numero 2",
        url:"",
        thumbnailUrl:"",
        colorFondo:"orange",
        imgPerfil:"2"
      },{
        id:"3",
        title: "Titulo3",
        body: "hola soy el body numero 3",
        url:"",
        thumbnailUrl:"",
        colorFondo:"purple",
        imgPerfil:"3"
      },{
        id:"4",
        title: "Titulo4",
        body: "hola soy el body numero 4",
        url:"",
        thumbnailUrl:"",
        colorFondo:"purple",
        imgPerfil:"4"
      },{
        id:"5",
        title: "Titulo5",
        body: "hola soy el body numero 5",
        url:"",
        thumbnailUrl:"",
        colorFondo:"grey",
        imgPerfil:"5"
      },{
        id:"6",
        title: "Titulo6",
        body: "hola soy el body numero 6",
        url:"",
        thumbnailUrl:"",
        colorFondo:"yellow",
        imgPerfil:"6"
      },{
        id:"7",
        title: "Titulo7",
        body: "hola soy el body numero 7",
        url:"",
        thumbnailUrl:"",
        colorFondo:"blue",
        imgPerfil:"7"
      },{
        id:"8",
        title: "Titulo8",
        body: "hola soy el body numero 8",
        url:"",
        thumbnailUrl:"",
        colorFondo:"brown",
        imgPerfil:"8"
      },{
        id:"9",
        title: "Titulo9",
        body: "hola soy el body numero 9",
        url:"",
        thumbnailUrl:"",
        colorFondo:"pink",
        imgPerfil:"9"
      },{
        id:"10",
        title: "Titulo10",
        body: "hola soy el body numero 10",
        url:"",
        thumbnailUrl:"",
        colorFondo:"yellow",
        imgPerfil:"10"
      },{
        id:"11",
        title: "Titulo11",
        body: "hola soy el body numero 11",
        url:"",
        thumbnailUrl:"",
        colorFondo:"blue",
        imgPerfil:"11"
      },{
        id:"12",
        title: "Titulo12",
        body: "hola soy el body numero 12",
        url:"",
        thumbnailUrl:"",
        colorFondo:"purple",
        imgPerfil:"12"
      },{
        id:"13",
        title: "Titulo13",
        body: "hola soy el body numero 13",
        url:"",
        thumbnailUrl:"",
        colorFondo:"orange",
        imgPerfil:"13"
      },{
        id:"14",
        title: "Titulo14",
        body: "hola soy el body numero 14",
        url:"",
        thumbnailUrl:"",
        colorFondo:"blue",
        imgPerfil:"14"
      },{
        id:"15",
        title: "Titulo15",
        body: "hola soy el body numero 15",
        url:"",
        thumbnailUrl:"",
        colorFondo:"white",
        imgPerfil:"15"
      },{
        id:"16",
        title: "Titulo16",
        body: "hola soy el body numero 16",
        url:"",
        thumbnailUrl:"",
        colorFondo:"brown",
        imgPerfil:"16"
      },{
        id:"17",
        title: "Titulo17",
        body: "hola soy el body numero 17",
        url:"",
        thumbnailUrl:"",
        colorFondo:"brown",
        imgPerfil:"17"
      },{
        id:"18",
        title: "Titulo18",
        body: "hola soy el body numero 18",
        url:"",
        thumbnailUrl:"",
        colorFondo:"orange",
        imgPerfil:"18"
      },{
        id:"19",
        title: "Titulo19",
        body: "hola soy el body numero 19",
        url:"",
        thumbnailUrl:"",
        colorFondo:"orange",
        imgPerfil:"19"
      },{
        id:"20",
        title: "Titulo20",
        body: "hola soy el body numero 20",
        url:"",
        thumbnailUrl:"",
        colorFondo:"yellow",
        imgPerfil:"20"
      },{
        id:"21",
        title: "Titulo21",
        body: "hola soy el body numero 21",
        url:"",
        thumbnailUrl:"",
        colorFondo:"yellow",
        imgPerfil:"21"
      },{
        id:"22",
        title: "Titulo22",
        body: "hola soy el body numero 22",
        url:"",
        thumbnailUrl:"",
        colorFondo:"yellow",
        imgPerfil:"22"
      },{
        id:"23",
        title: "Titulo23",
        body: "hola soy el body numero 23",
        url:"",
        thumbnailUrl:"",
        colorFondo:"lime",
        imgPerfil:"23"
      },{
        id:"24",
        title: "Titulo24",
        body: "hola soy el body numero 24",
        url:"",
        thumbnailUrl:"",
        colorFondo:"brown",
        imgPerfil:"24"
      },{
        id:"25",
        title: "Titulo25",
        body: "hola soy el body numero 25",
        url:"",
        thumbnailUrl:"",
        colorFondo:"purple",
        imgPerfil:"25"
      },{
        id:"26",
        title: "Titulo26",
        body: "hola soy el body numero 26",
        url:"",
        thumbnailUrl:"",
        colorFondo:"brown",
        imgPerfil:"26"
      },{
        id:"27",
        title: "Titulo27",
        body: "hola soy el body numero 27",
        url:"",
        thumbnailUrl:"",
        colorFondo:"blue",
        imgPerfil:"27"
      },{
        id:"28",
        title: "Titulo28",
        body: "hola soy el body numero 28",
        url:"",
        thumbnailUrl:"",
        colorFondo:"grey",
        imgPerfil:"28"
      },{
        id:"29",
        title: "Titulo29",
        body: "hola soy el body numero 29",
        url:"",
        thumbnailUrl:"",
        colorFondo:"pink",
        imgPerfil:"29"
      },{
        id:"30",
        title: "Titulo8",
        body: "hola soy el body numero 30",
        url:"",
        thumbnailUrl:"",
        colorFondo:"blue",
        imgPerfil:"30"
      },{
        id:"31",
        title: "Vote y perdí :(",
        body: "hola soy el body numero 31",
        url:"",
        thumbnailUrl:"",
        colorFondo:"brown",
        imgPerfil:"31"
      }]


  }

    getMiembros(){
      //   return this._http.get('/app/json/miembros.json')
      // .map(res => res.json());
      return this.miembros;
      } 

     searchSrt(srt : string){
        let miembros2 :Miembros[]= [];
        this.miembros.forEach(element => {
        if(element.body.toUpperCase().match(srt.toUpperCase())!= null){
            miembros2.push(element);
        }
      });
      return miembros2;
    }

    delMiembroArray(miembro : Miembros){
    let posicion = this.miembros.indexOf(miembro);
    this.miembros.splice(posicion,1);
    return  this.miembros.map(res => res);
  }  

  addMiembro(id:string,title:string,body:string,backgroung:string,imgPerfil:string){
    let objeto: Miembros;
     objeto={
      id:id,
      title:title,
      body:body,
      url:"",
      thumbnailUrl:"",
      colorFondo:backgroung,
      imgPerfil:imgPerfil
    }
    this.miembros.push(objeto);
    return this.miembros;
  }
}
