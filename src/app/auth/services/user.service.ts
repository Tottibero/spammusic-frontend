import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment.prod';

import { LoginForm } from '../interfaces/login-form.interface';
import { RegisterForm } from '../interfaces/register-form.interface';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
declare const gapi:any;


const BASE_URL = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public auth2:any;

  constructor(private http: HttpClient, private router:Router, private ngZone: NgZone) { 
    this.googleInit();
  }

  createUser(formData: RegisterForm) {
    return this.http.post(`${BASE_URL}/user`, formData)
      .pipe(tap((resp: any) => {
        localStorage.setItem('token', resp.token)
      })
      );
  }

  login(formData: LoginForm) {
    return this.http.post(`${BASE_URL}/login`, formData)
      .pipe(tap((resp: any) => {
        localStorage.setItem('token', resp.token)
      })
      );
  }

  
  loginGoogle(token) {
    return this.http.post(`${BASE_URL}/login/google`, {token})
      .pipe(tap((resp: any) => {
        localStorage.setItem('token', resp.token)
      })
      );
  }

  googleInit(){
    return new Promise<void> (resolve =>{
      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: '523605348974-3c407f67qe7g783e2jda5qbofll78ikn.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });
        resolve();
      });
    })
  }

  logout(){
    localStorage.removeItem('token');
    this.auth2.signOut().then( () => {

      this.ngZone.run(()=>{
        this.router.navigateByUrl('/login');
      });

    });
  }

  validateToken(): Observable<boolean>{
    const token = localStorage.getItem('token') || '';
    console.log("token", token);
    return this.http.get(`${BASE_URL}/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      }),
      map(resp => true),
      catchError( error => of(false))
    );
  }

}

