import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    TitleComponent,

  ]
})
export class SharedModule { }
