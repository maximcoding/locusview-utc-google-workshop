import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IBook} from "../../books.service";

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {

  @Input() book?: IBook;

  @Output() editClicked = new EventEmitter<any>();
  @Output() deleteClicked = new EventEmitter<any>();

  public onDeleteClicked($event: any) {
    this.deleteClicked.emit($event)
  }

}
