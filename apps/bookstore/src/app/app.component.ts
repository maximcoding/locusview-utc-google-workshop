import {Component, Renderer2} from '@angular/core';
import {BooksService, IBook} from "./books.service";

@Component({
  selector: 'locusview-uts-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public books: IBook[] = [];

  constructor(private booksService: BooksService) {
    this.booksService
      .getBooks('maxim')
      .subscribe(res => {
        this.books = res;
      });
  }
}
