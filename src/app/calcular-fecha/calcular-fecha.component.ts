
import * as moment from 'moment';
import {DatePipe} from '@angular/common';



import { Component, OnInit, ViewChild, Input, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovimientosService } from '../_services/movimientos.service';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../../app/_models';
import { DomSanitizer } from '@angular/platform-browser';
import {FormControl} from '@angular/forms';
import { UserService, AuthenticationService, LanguageService, AlertService } from '../../app/_services';
declare var $;
@Component({
  selector: 'app-calcular-fecha',
  templateUrl: './calcular-fecha.component.html',
  styleUrls: ['./calcular-fecha.component.css']
})
export class CalcularFechaComponent implements OnInit {

  value 
  Fecha
  Hora
  unidadValue

  fechaPipe
  fechaFinal
  validacionDia : boolean = false
  validacionMes : boolean = false
  public fechaInicial: string;

  currentUser: User;
  currentUserSubscription: Subscription;
  public cont = 0
  public id = 0
    public language ;
    public languageGlobal;
    public test : string
    public imagen

 
    public userName = localStorage.getItem('nombreUsuario')

  constructor(  
    private router: Router,
    public datepipe: DatePipe,
        private authenticationService: AuthenticationService,
        private languagueService: LanguageService,
    public dialog: MatDialog) { 
      this.language = languagueService.getLanguage();
      this.languageGlobal = this.language.global; 
      this.languagueService.changeLanguage.subscribe(
          isEnglish => {
            this.language = languagueService.getLanguage();
            this.languageGlobal = this.language.global; 
       
          }
        )
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
    });

    }

    
    checkValue(){
          
      this.cont ++
if(this.cont === 1){
    this.language = this.languagueService.getLanguage();
    this.languageGlobal = this.language.global; 
    localStorage.setItem('language', 'true');
    this.languagueService.changeLanguageFunction(true);
}else if(this.cont=== 2){
    localStorage.setItem('language', 'false');
    localStorage.setItem('chooseLanguage', 'true');
    this.languagueService.changeLanguageFunction(false); 
  this.cont = 0
}
} 

logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}
  ngOnInit() {
  }

  unidad(unidad: string){
    this.unidadValue = unidad
    console.log(unidad, 'valor unidad')
  }

  agregar(){
console.log(this.fecha.toString(), 'fecha')
let separarFecha = this.fechaPipe.split('-')
let unidadAnio = parseInt(separarFecha[0])
let unidadMes = parseInt(separarFecha[1])
let unidadDia= parseInt(separarFecha[2])
this.validacionDia = false
this.validacionMes = false

switch (this.unidadValue) {

  case '1':
    console.log('dia')
    let sumadia = unidadDia+parseInt(this.value)

if((unidadMes === 1 || unidadMes === 3 || unidadMes === 5 || unidadMes === 7 || unidadMes === 8 || unidadMes === 10 || unidadMes === 12 ) && sumadia >31){
  this.validacionDia = true
  this.fechaFinal = null
}else if(unidadMes === 2 && sumadia >=28){
  this.validacionDia = true
  this.fechaFinal = null

}else if((unidadMes === 4 || unidadMes === 6 || unidadMes === 9 || unidadMes === 11) && sumadia >30){
  this.validacionDia = true
  this.fechaFinal = null

}else{
  this.fechaFinal = unidadAnio+'/'+unidadMes+'/'+sumadia
}
    break;
  case '2':
    console.log('mes')

    let sumaMes = unidadMes+parseInt(this.value)
    if(sumaMes >12){
      this.validacionMes = true
      this.fechaFinal = null
    }else{
      this.fechaFinal = unidadAnio+'/'+sumaMes+'/'+unidadDia
    }



    break;
    case '3':
      console.log('año')
      let sumaAnio = unidadAnio+parseInt(this.value)

      this.fechaFinal = sumaAnio+'/'+unidadMes+'/'+unidadDia

 /*      default:

    break;
    text = "No value found"; */
}

console.log(this.fechaFinal, 'fechaFinal')
  }

  getDate(fecha: string){
    console.log(fecha, 'fecha')

    

  }

  
  validDateRange(): void {
      this.fechaPipe = `${this.datepipe.transform(this.fechaInicial, 'yyyy-MM-dd')}`;
      console.log(this.fechaPipe, 'fechapipe')
    
    
  }


  onDateChange( $event ) {
    const formatted = $event.value.format('YYYY-MM-DD')
    $event.target.value = formatted
}

  fecha() {
    let fechaActual = new Date();
    let dia = fechaActual.getDate().toString();
    let mes = (fechaActual.getMonth() + 1).toString();
    let anio = fechaActual.getFullYear().toString();
    let hora = fechaActual.getHours().toString();
    let minutos = fechaActual.getMinutes().toString();
    let segundos = fechaActual.getSeconds().toString();
    this.Fecha = anio + "-" + mes + "-" + dia;
    this.Hora = hora + ":" + minutos + ":" + segundos;
  }
  

}
