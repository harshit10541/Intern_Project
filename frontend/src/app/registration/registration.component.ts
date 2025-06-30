import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  registerForm: FormGroup;
  isRegisterModalOpen = true;
  @Output() close = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.registerForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  register() {
    if (this.registerForm.valid) {
      // Your registration logic here (e.g., send to API)
      console.log('Register Form Data:', this.registerForm.value);
      this.close.emit(); // Emit event to close the modal
    }
  }

  onClose() {
    this.close.emit();
  }
  closeModal() {
    this.close.emit();
  }
}
