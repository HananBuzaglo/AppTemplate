import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { StorageService } from '../../services/storage/storage.service';
import { TranslateService } from '../../modules/translate/translate';


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  //#region Component Variables
  translatedText: string;
  currentLang  = 'he';
  supportedLanguages = [
    {name: 'עברית', value: 'he' , icon: 'assets/imgs/lang/il.svg'},
    {name: 'English', value: 'en' , icon: 'assets/imgs/lang/um.svg'}
  ];
  dir = 'ltr';
  //#endregion

  constructor(
    private translate: TranslateService,
    private storage: StorageService,
    @Inject(DOCUMENT) private document: Document
  ) { }


  isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this.translate.currentLang;
  }

  selectLang(lang: string) {
    // set current lang;
    this.translate.use(lang);
    this.currentLang = lang;
    this.storage.addItem('lang', lang);
    this.changeDirection();
  }

  changeDirection() {
    const accountLang = this.isCurrentLang('he');
    this.dir = accountLang ? 'rtl' : 'ltr';
    this.document.body.style.direction = this.dir;
    this.document.querySelector('html').setAttribute('dir', this.dir);
    this.document.querySelector('html').setAttribute('lang', this.currentLang);
  }

  ngOnInit() {
    // set current langage
    const lang = this.storage.getItem('lang');
    if (lang) {
      this.selectLang(lang);
    } else {
      this.selectLang('he');
    }
  }

}
