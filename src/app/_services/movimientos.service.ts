
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MovimientosService {
  constructor(private http: HttpClient) { }

  sendSolicitud(data: any) : Observable<any> {
    return this.http.post<any>(`http://201.131.20.125/BienesRaicesApi/api/services/app/Catalogo/EstadoCivil`, data , { withCredentials: false })
  }




}

