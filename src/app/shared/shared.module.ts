import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    TitleComponent,

  ]
})
export class SharedModule { }
