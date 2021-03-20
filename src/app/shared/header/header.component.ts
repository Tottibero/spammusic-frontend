import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../auth/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  classApplied = false;

  constructor(
    public translate: TranslateService,
    private userService: UserService
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

  logout(){
    this.userService.logout();
  }
  



}
