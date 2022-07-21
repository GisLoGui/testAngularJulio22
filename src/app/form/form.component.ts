
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';


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
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  keywords = new Set([]);

  formulario: FormGroup;
  public optionFumas: any;
  public optionLectura: any;
  public optionLibros: any;
  public optionEdoCivil: any;
  public valorLectura : boolean = false

  valid:boolean
  valueFumas : boolean
  valueedoCivil : boolean

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
    private formBuilder: FormBuilder,
    private _movimientosService: MovimientosService,

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




  



    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }


  addKeywordFromInput(event: MatChipInputEvent) {

    let arrayLibros = []
    if (event.value) {
      this.keywords.add(event.value);
      /* event.chipInput!.clear(); */
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }

  ngOnInit() {
    this.valid = false

    this.formulario = this.formBuilder.group({
      nombre: ['', [
        Validators.required,
        Validators.pattern('[A-Za-z .ÁÉÍÓÚáéíóúñÑ]*'),
        Validators.maxLength(30)
      ]],
      apellido: ['', [
        Validators.required,
        Validators.pattern('[A-Za-z .ÁÉÍÓÚáéíóúñÑ]*'),
        Validators.maxLength(30)
      ]],
      fumas: ['', [Validators.required]],
      lectura: ['', [Validators.required]],
      libros: ['', [Validators.required]],
      edoCivil: [''],
    });


    this.optionFumas = [
      { "id": true, "name": "Si" },
      { "id": false, "name": "No" }
    ]
  
    this.optionLectura = [
      { "id": true, "name": "Si" },
      { "id": false, "name": "No" }
    ]
  
    this.optionLibros = [
      { "id": '1', "name": "Si" },
      { "id": '2', "name": "No" }
    ]
  
    this.optionEdoCivil = [
      { "id": 12, "name": "Casado(a)" },
      { "id": 13, "name": "Soltero(a)" },
      { "id": 14, "name": "Viudo(a)" }
    ]
  }

  get f() { return this.formulario.controls; }

  habilitar(){
    if (this.formulario.invalid) {
      this.valid = false

    }else{
      this.valid = true

    }
  }


  unidad(unidad: string){
    console.log(unidad, 'valor unidad')
  }
  lecturas(valueLectura: boolean){
    if(valueLectura === true){
      this.valorLectura = true
      
    }else{
      this.valorLectura = false

    }
  }

  valorFumas(valueFumas: boolean){
    this.valueFumas = valueFumas
  }
  valorEdoCivil(valueCivil: boolean){
    this.valueedoCivil = valueCivil
  }



  onSubmiti() {

    let send = {

      nombres: this.f.nombre.value,
      apellidos: this.f.apellido.value,
      fumas: this.valueFumas,
      actualmentePracticasLectura: this.valorLectura,
      librosLeidosUltimosTresMeses: this.keywords,
      estadoCivil: this.valueedoCivil
    };

    console.log(send, 'send')

    this._movimientosService.sendSolicitud(send).subscribe(response => {
/*       this._Alertas.openSnackBar('Solicitud creada exitosamente', 'success', 4000, 'bottom', 'left');
 */

    },
      err => {
        console.log(err);
      /*   this._Alertas.openSnackBar(err, 'error', 4000, 'bottom', 'left');
        this.loading = false; */
      },
      () => {
        this.loading = false
      },
    );
    
    


  }


}
