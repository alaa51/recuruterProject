import { Component, OnInit } from '@angular/core';
import {offerData} from "../../../mocks/data";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-my-offer',
  templateUrl: './my-offer.component.html',
  styleUrls: ['./my-offer.component.css']
})
export class MyOfferComponent implements OnInit {
  jobListings = offerData;
  editedJob: any = {};
  editModalVisible = false;
  editForm= this.fb.group({
    entreprise: ['', Validators.required],
    titre: ['', Validators.required],
    type: ['', Validators.required],
    salaire: ['', Validators.required],
    description: ['', Validators.required],
  });
  editJob(job: any) {
    this.editedJob = { ...job };
    this.editForm.patchValue(this.editedJob);
    console.log(job)
    this.editModalVisible = true;
  }
  saveEdit() {
    const updatedJob = this.editForm.value;
    const index = this.jobListings.findIndex(j => j.id === this.editedJob.id);
    if (index !== -1) {
      this.jobListings[index] = {
        ...this.editedJob,
        ...updatedJob
      };
    }
    this.editModalVisible = false;
  }
  confirmDelete(jobId: number) {
    this.modalService.confirm({
      nzTitle: 'Are you sure you want to delete this job?',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger:true,
      nzOnOk: () => this.deleteJob(jobId),
      nzCancelText: 'No',
      nzOnCancel: () => {}
    });
  }
  deleteJob(jobId: number) {
    this.jobListings = this.jobListings.filter(job => job.id !== jobId);
  }

  cancelEdit() {
    this.editModalVisible = false;
  }

  constructor(private fb: FormBuilder,private modalService: NzModalService) { }

  ngOnInit(): void {
  }

}
