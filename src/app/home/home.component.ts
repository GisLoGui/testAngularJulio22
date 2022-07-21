
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
export interface DialogData {
  nombre: string;
}

@Component({ templateUrl: 'home.component.html' })

export class HomeComponent implements OnInit {
  loading = false;

 
miNombre = 'Gisela Lozada'
  currentUser: User;
  currentUserSubscription: Subscription;
  public cont = 0
  public id = 0
    public language ;
    public languageGlobal;
    public test : string
    public imagen

    public userName = localStorage.getItem('nombreUsuario')

nombre: string

  constructor(  
    private router: Router,
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




  

/* openDialog(): void {
  const dialogRef = this.dialog.open(modalNombreComponent, {
    width: '250px',
    data: {name: this.miNombre, nombre: this.nombre},
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.nombre = result;
  });
}
 */
    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }


  
  ngOnInit(): void {


  }


  

  slides = [
    {'image': '../../assets/imagen1.jpeg'}, 
/*     {'image':  '../../assets/imagen2.jpeg'},
    {'image': '../../assets/imagen3.jpeg'} */

  ]



}
