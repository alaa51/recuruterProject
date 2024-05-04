import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  myForm = this.fb.group({
    name: ['', Validators.required],
    title: ['', Validators.required],
    type: ['', Validators.required],
    salary: ['', [Validators.required, Validators.min(0)]],
    unit: ['', Validators.required],
    timeType: ['', Validators.required],
    description: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.myForm.valid) {
      // Handle form submission
      console.log(this.myForm.value);
    }
  }
  getValidationStatus(controlName: string): string {
    const control = this.myForm.get(controlName);
    if (control?.touched && control.invalid) {
      return 'error';
    } else if (control?.touched && control.valid) {
      return 'success';
    } else {
      return '';
    }
  }

}
