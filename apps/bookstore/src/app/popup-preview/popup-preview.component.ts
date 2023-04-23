import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'popup-review',
  templateUrl: './popup-preview.component.html',
  styleUrls: ['./popup-preview.component.scss'],
})
export class PopupPreviewComponent {

  public toggle = false;

  public togglePreview() {
    this.toggle = !this.toggle;
  }

}
