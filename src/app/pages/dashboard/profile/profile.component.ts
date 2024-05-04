import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {experience} from "../../../mocks/data";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  jobOffers = experience;
  inputContent = '';
  contentArray: string[] = ['HTML', 'CSS', 'JS'];
  contactForm = this.fb.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern('^\\+[0-9]{1,3}\\s?\\d{1,14}(\\s\\d{1,13})?$')]],
    email: ['', [Validators.required, Validators.email]]
  });
  editForm = this.fb.group({
    title: ['', [Validators.required]],
    company: ['', [Validators.required]],
    countryCity: ['', [Validators.required]],
    start_at: ['', [Validators.required]],
    end_at: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });
  isEditModalVisible = false;
  selectedJobOffer: any;

  constructor(private fb: FormBuilder) { }
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  openEditModal(offer: any): void {
    this.selectedJobOffer = offer;
    this.editForm.patchValue(offer);
    this.isEditModalVisible = true;
  }
  onSave(): void {
    if (this.editForm.valid) {
      Object.assign(this.selectedJobOffer, this.editForm.value);
      console.log('Updated job offer:', this.selectedJobOffer);
      this.isEditModalVisible = false;
    } else {
      console.log('Form is invalid');
    }
  }

  handleCancel(): void {
    this.isEditModalVisible = false; // Hide the modal
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

  ngOnInit(): void {
  }

}
