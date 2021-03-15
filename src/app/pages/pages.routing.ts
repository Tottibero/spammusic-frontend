import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { DiscsComponent } from './discs/discs.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

    {path: '', 
    component: PagesComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'discs', component: DiscsComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
