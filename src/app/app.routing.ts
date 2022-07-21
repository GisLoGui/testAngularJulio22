import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';

import { ConversacionesComponent } from '../app/conversaciones/conversaciones.component';
import { FormComponent } from '../app/form/form.component';
import { CalcularFechaComponent } from '../app/calcular-fecha/calcular-fecha.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    { path: 'conversaciones', component: ConversacionesComponent },
    { path: 'form', component: FormComponent },
    { path: 'calculaFecha', component: CalcularFechaComponent },




    { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes);