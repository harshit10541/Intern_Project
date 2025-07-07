import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  showRegisterModal: boolean = false; // Add this

  @Output() close = new EventEmitter<void>();


  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.router.navigate(['/dashboard']);
  }

  openRegisterModal() {
    this.showRegisterModal = true;
  }


  closeModal() {
    this.close.emit();
  }
}



