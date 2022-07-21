import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, LanguageService} from './_services';
import { User } from './_models';

@Component({ 
    selector: 'app-root', 
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    currentUser: User;
    @Output() sidenavClose = new EventEmitter();

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private languageService: LanguageService,
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        if( !localStorage.getItem('language') ){
            localStorage.setItem('language', 'false')
          }
    }
    

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

  

    link2() {
        this.authenticationService.link2();
        this.router.navigate(['/tabla']);
    }

    ngOnInit() {
    }

    public onSidenavClose = () => {
        this.sidenavClose.emit();
      }
}