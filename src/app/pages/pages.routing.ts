import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { DiscsComponent } from './discs/discs.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AnticipatedComponent } from './anticipated/anticipated.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [

    {path: '', 
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'home', component: HomeComponent, data:{
        title: 'Home'
      }},
      {path: 'discs', component: DiscsComponent, data:{
        title: 'Discs'
      }},
      {path: 'statistics', component: StatisticsComponent, data:{
        title: 'Statistics'
      }},
      {path: 'calendar', component: CalendarComponent, data:{
        title: 'Calendar'
      }},
      {path: 'anticipated', component: AnticipatedComponent, data:{
        title: 'Anticipated'
      }},
      {path: 'account-settings', component: AccountSettingsComponent, data:{
        title: 'Account Settings'
      }},

      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
