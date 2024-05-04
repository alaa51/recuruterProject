import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
validateForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]]
  });
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
  }
  submitForm(): void {
    if (this.validateForm.valid) {
      const formData = this.validateForm.value;
      console.log('Form data:', formData);
      this.validateForm.reset();
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
