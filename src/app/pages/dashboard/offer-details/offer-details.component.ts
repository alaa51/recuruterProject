import { Component, OnInit } from '@angular/core';
import {listSubmits} from "../../../mocks/data";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  job =  {
    "id": 1,
    "entreprise": "Tech Solutions Inc.",
    "titre": "Software Developer",
    "type": "Full-time",
    "salaire": "60000 USD/year",
    "description": "Design, code, and implement software solutions for various client projects. Collaborate with cross-functional teams."
  }

  listSbmits = listSubmits;
  constructor(private modalService: NzModalService) { }
  showConfirm(): void {
    this.modalService.success({
      nzTitle: 'Confirm',
      nzContent: 'ARe you sure you want to accept  this candidate ??.',
      nzOkText: 'Accept',
      nzCancelText: 'Cancel',
      nzOkType: 'primary',
    });
  }
  showConfirm1(): void {
    this.modalService.error({
      nzTitle: 'Confirm',
      nzContent: 'ARe you sure you want to refuse  this candidate ??.',
      nzOkText: 'Delete',
      nzCancelText: 'Refuse',
      nzOkType: 'primary',
      nzOkDanger: true
    });
  }
  ngOnInit(): void {
  }

}
