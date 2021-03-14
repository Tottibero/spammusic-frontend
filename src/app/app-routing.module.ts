import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router'
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { DiscsComponent } from './pages/discs/discs.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  
  {path: '', 
  component: PagesComponent,
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'discs', component: DiscsComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
  ]
  },

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  
  {path: '**', component: NotfoundComponent},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
