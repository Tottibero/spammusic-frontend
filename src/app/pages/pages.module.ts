import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router'

import { HomeComponent } from './home/home.component';
import { DiscsComponent } from './discs/discs.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    DiscsComponent,
    PagesComponent  
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
