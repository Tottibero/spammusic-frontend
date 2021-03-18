import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'


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
    email: ['', Validators.required],
    password1: ['', Validators.required],
    password2: ['', Validators.required],
    terms: [false, Validators.required],
  })


  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  createUser(){
    this.formSubmitted = true;
    console.log(this.registerForm.value);
  }

  fieldNoValid(field: string):boolean{

    if(this.registerForm.get(field).invalid && this.formSubmitted){
      return true
    } else {
      return false
    }
  }

}
