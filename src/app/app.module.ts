import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule}    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatMenuModule } from '@angular/material';
import {TableModule} from 'primeng/table';
import { fakeBackendProvider } from './_helpers';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { MAT_DATE_LOCALE } from '@angular/material/core'
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialsModule } from '../modules/materials/materials.module';
import { AlertComponent } from './_components';
import { MatPaginatorIntl } from '@angular/material/paginator'
import { DatePipe } from '@angular/common';

import {MatDatepickerModule} from '@angular/material/datepicker';

import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { HelloComponent } from './hello.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule
} from '@angular/material';;


import { MatCarouselModule } from '@ngmodule/material-carousel';;
import { ConversacionesComponent } from './conversaciones/conversaciones.component'
;
import { CalcularFechaComponent } from './calcular-fecha/calcular-fecha.component'
;
import { FormComponent } from './form/form.component'
const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
   
  ];


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        ReactiveFormsModule,
        MaterialsModule,
        MDBBootstrapModule.forRoot(),
        MatMenuModule,
        CommonModule,
        RouterModule.forRoot(routes),
        FlexLayoutModule,
        BrowserAnimationsModule,
        TableModule,
        FormsModule,
        InfiniteScrollModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
    MatCarouselModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        AlertComponent,
        HelloComponent ,
        ConversacionesComponent,
        FormComponent,
        CalcularFechaComponent],
    exports: [
        MatMenuModule,
        RouterModule,
        MatDatepickerModule
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        fakeBackendProvider, DatePipe
    ],
    bootstrap: [AppComponent],
    
})


export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);



