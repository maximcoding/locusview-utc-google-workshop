import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {IBook} from "../books.service";

@Component({
  selector: 'dialog-preview',
  templateUrl: './dialog-preview.component.html',
  styleUrls: ['./dialog-preview.component.scss'],
})
export class DialogPreviewComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IBook) {
  }

}
