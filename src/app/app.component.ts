import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  //Utilizamos el lenguaje del navegador
   userLang = navigator.language;


  constructor(
    public translate: TranslateService
  ){
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang(this.userLang);
  }

  ngOnInit(){


}



}

