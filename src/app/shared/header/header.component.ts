import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  classApplied = false;

  constructor(
    public translate: TranslateService
  ){
  }

  ngOnInit(): void {
  }

  toggleClass() {
    this.classApplied = !this.classApplied;
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
  


}
