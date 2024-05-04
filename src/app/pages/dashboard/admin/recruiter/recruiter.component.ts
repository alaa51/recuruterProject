import { Component, OnInit } from '@angular/core';
import {recruiterList} from "../../../../mocks/data";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
  data = recruiterList;

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
