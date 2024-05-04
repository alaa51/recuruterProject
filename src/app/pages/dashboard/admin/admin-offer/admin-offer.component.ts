import { Component, OnInit } from '@angular/core';
import {Offer} from "../../../../models/offer";
import {offerData} from "../../../../mocks/data";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-admin-offer',
  templateUrl: './admin-offer.component.html',
  styleUrls: ['./admin-offer.component.css']
})
export class AdminOfferComponent implements OnInit {
  data = offerData;

  constructor(private modalService: NzModalService) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: 'Confirm',
      nzContent: 'ARe you sure you want to delete this offer??.',
      nzOkText: 'Delete',
      nzCancelText: 'Cancel',
      nzOkType: 'primary',
      nzOkDanger: true
    });
  }


}
