import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',
    '../auth.scss']
})
export class LoginComponent implements OnInit {

  public formSubmitted = false;
  public auth2: any;


  public loginForm = this.formBuilder.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [false]
  })


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private translate: TranslateService,
    private ngZone: NgZone) { }

  ngOnInit(): void {
    this.renderButton();
  }

  login() {
    console.log(this.loginForm.value);
    
    if (this.loginForm.invalid) {
      return;
    } 
    
    this.userService.login(this.loginForm.value)
      .subscribe(resp => {

        if (this.loginForm.get('remember').value) {
          localStorage.setItem('email', this.loginForm.get('email').value);
        } else {
          localStorage.removeItem('email');
        }

        this.router.navigateByUrl('/');


      }, err => {
        console.log(err);
        if (err.status === 404) {
          Swal.fire('Error', this.translate.instant('loginError'), 'error');
        } else {
          Swal.fire('Error', this.translate.instant('commonError'), 'error');
        }
      })
  }

  onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    var id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token);
  }

  onFailure(error) {
    console.log(error);
  }

  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 40,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSuccess,
      'onfailure': this.onFailure
    });

    this.startApp();
  }

  async startApp() {
     await this.userService.googleInit();
      this.auth2 = this.userService.auth2;
      this.attachSignin(document.getElementById('my-signin2'));
  };

  attachSignin(element) {
    console.log(element.id);
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        const id_token = googleUser.getAuthResponse().id_token;

        this.userService.loginGoogle(id_token).subscribe(resp => {
          this.ngZone.run(() => {
                   this.router.navigateByUrl('/')
          })
          });
      }, function (error) {
        console.warn(JSON.stringify(error, undefined, 2));
      });
  }
}
