import {Component, OnInit} from '@angular/core';
import {BooksService, IBook} from "../books.service";
import {delay, Observable, take} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {BookComponent} from "./book/book.component";

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {

  public books$: Observable<IBook[]> | undefined;
  public booksSynchronous = [];
  public searchTerm = 'Angular';

  constructor(private booksService: BooksService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getBook$();
  }

  public previewItem(item: IBook) {
    this.dialog.open(BookComponent, {
      data: item,
      height: '400px',
      width: '600px',
    });
  }

  public getBook$() {
    this.books$ = this.booksService.getBooks(this.searchTerm).pipe(delay(1000));
  }


  public addBook($event: any) {
  }

  public editBook($event: any) {
  }

  public deleteBook(book: IBook) {
  }

}
