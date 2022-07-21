
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
  selector: 'app-conversaciones',
  templateUrl: './conversaciones.component.html',
  styleUrls: ['./conversaciones.component.css']
})
export class ConversacionesComponent implements OnInit {
  loading = false;

 

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

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
