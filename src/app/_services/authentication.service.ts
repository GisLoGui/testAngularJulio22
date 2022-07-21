import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models/';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    public get currentUserValue(): User {
        
        return this.currentUserSubject.value;
    }


   login(username: string, password: string) {
    let send = {
        username: username,
      password: password
    };
    console.log(send);
 
var url = this.http.post<any>('https://desa.ies-webcontent.com.mx/login', send, {withCredentials: false})
  
return url
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user.access_token));
                   this.currentUserSubject.next(user);
                   localStorage.setItem('language', 'false');

        return user;
      }));
  }




    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    link1() {
        this.currentUserSubject.next(null);
    }
    link2() {
        this.currentUserSubject.next(null);
    }
}