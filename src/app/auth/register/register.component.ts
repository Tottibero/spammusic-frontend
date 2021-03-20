import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss',
    '../auth.scss']
})
export class RegisterComponent implements OnInit {

  public formSubmitted = false;

  public registerForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
    terms: [false, Validators.requiredTrue],
  }, { validator: this.samePassword('password', 'password2') })


  constructor(private formBuilder: FormBuilder,
              private userService:UserService,
              private translate: TranslateService) { }

  ngOnInit(): void {
  }

  createUser() {

    this.formSubmitted = true;
    console.log(this.registerForm.value);

    if (this.registerForm.invalid){
      return;
    }

    this.userService.createUser( this.registerForm.value).subscribe( resp =>{
      console.log(resp);
    }, (err) => {
      console.log("err", err);
      console.log(err.error.msg);

       if(err.error.msg.includes("Username")){
        Swal.fire('Error', this.translate.instant('usernameError'), 'error');
       } else if(err.error.msg.includes("Email")){
        Swal.fire('Error', this.translate.instant('emailError'), 'error');
       } else{
        Swal.fire('Error', this.translate.instant('commonError'), 'error');
       }
    });


  }

  fieldNoValid(field: string): boolean {

    if (this.registerForm.get(field).invalid && this.formSubmitted) {
      return true
    } else {
      return false
    }
  }

  isValid(field: string) {
    if (this.formSubmitted) {
      if (this.registerForm.get(field).invalid && this.formSubmitted) {
        return 'is-invalid'
      } else {
        return 'is-valid'
      }
    }
  }

  samePassword( password1 :string , password2: string) {

    return ( (formGroup:FormGroup) =>{
      const pass1Control = formGroup.get(password1);
      const pass2Control = formGroup.get(password2);
      const pass1Invalid = formGroup.get(password1).invalid;
      const pass2Invalid = formGroup.get(password1).invalid;

      if( !pass1Invalid && !pass2Invalid && (pass1Control.value === pass2Control.value)){
        pass2Control.setErrors(null)
      } else{
        pass2Control.setErrors({notSame: true})
      }
    })
  }


  acceptTerms() {
    return !this.registerForm.get('terms').value && this.formSubmitted;
  }



}
