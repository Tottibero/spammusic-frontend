import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router'

import { HomeComponent } from './home/home.component';
import { DiscsComponent } from './discs/discs.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AnticipatedComponent } from './anticipated/anticipated.component';
import { StatisticsComponent } from './statistics/statistics.component';



@NgModule({
  declarations: [
    HomeComponent,
    DiscsComponent,
    PagesComponent,
    AccountSettingsComponent,
    CalendarComponent,
    AnticipatedComponent,
    StatisticsComponent  
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    DiscsComponent,
    PagesComponent  
  ]
})
export class PagesModule { }
