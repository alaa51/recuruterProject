import { Component, OnInit } from '@angular/core';
import {listSubmit} from "../../../mocks/data";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-submit-list',
  templateUrl: './submit-list.component.html',
  styleUrls: ['./submit-list.component.css']
})
export class SubmitListComponent implements OnInit {
  listSubmit = listSubmit

  constructor(private modalService: NzModalService) { }

  ngOnInit(): void {
  }
  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: 'Confirm',
      nzContent: 'ARe you sure you want to delete this line??.',
      nzOkText: 'Delete',
      nzCancelText: 'Cancel',
      nzOkType: 'primary',
      nzOkDanger: true
    });
  }

}
