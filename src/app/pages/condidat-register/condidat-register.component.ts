import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-condidat-register',
  templateUrl: './condidat-register.component.html',
  styleUrls: ['./condidat-register.component.css']
})
export class CondidatRegisterComponent implements OnInit {
  current = 0;
  inputContent = '';
  contentArray: string[] = [];
  form: FormGroup =  this.fb.group({
    experiences: this.fb.array([]) // Initialize the experiences array
  });




  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    this.router.navigate(['/login'])

  }
  validateForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]]
  });

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }
  constructor(private fb: FormBuilder, public router:Router) {}
  get experiences(): FormArray {
    return this.form.get('experiences') as FormArray;
  }
  addExperience() {
    const experienceGroup = this.fb.group({
      title: ['', Validators.required],
      enterprise: ['', Validators.required],
      city: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      description: ['']
    });

    this.experiences.push(experienceGroup);
  }
  removeExperience(index: number) {
    this.experiences.removeAt(index);
  }

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
  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.contentArray.push(this.inputContent);
      this.inputContent = ''; // Clear the input field
    }
  }
  removeItem(index: number) {
    this.contentArray.splice(index, 1);
    console.log(this.contentArray)
  }

}
