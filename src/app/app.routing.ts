import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '**', component: NotfoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
