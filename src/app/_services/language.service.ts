

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { spanish } from 'src/language/spanish.config';
import { english } from 'src/language/english.config';

@Injectable({ providedIn: 'root' })
export class LanguageService {
    changeLanguage: Subject<any> = new Subject<any>();
    constructor() {  }

    getLanguage () {
        if (localStorage.getItem('language') === 'true') {
          return  english;
        } else if (localStorage.getItem('language') === 'false') {

          return spanish;    
        }
        return spanish;
      }
    
      changeLanguageFunction(isEnglish) {
        this.changeLanguage.next(isEnglish);
      }
}