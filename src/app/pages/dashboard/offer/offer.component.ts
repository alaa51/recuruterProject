import { Component, OnInit } from '@angular/core';
import {offerData} from "../../../mocks/data";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  jobListings = offerData;
  drawerVisible = false;
  selectedJob: any;
  message: string = '';
  uploadedCV: File | null = null;

  constructor() { }

  ngOnInit(): void {
  }
  openDrawer(job: any) {
    this.selectedJob = job;
    this.drawerVisible = true;
  }

  closeDrawer() {
    this.drawerVisible = false;
    this.selectedJob = null;
  }

  onFileChange(event: any) {
    this.uploadedCV = event.target.files[0];
  }

  submitApplication() {
    console.log('Message:', this.message);
    console.log('Uploaded CV:', this.uploadedCV);
    this.closeDrawer();
  }

}
