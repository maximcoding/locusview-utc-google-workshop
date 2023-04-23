import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DiscountPipe } from './discount.pipe';
import { ColorizeDirective } from './colorize.directive';
import { BooksComponent } from './books-container/books.component';
import { BookComponent } from './books-container/book/book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogPreviewComponent } from './dialog-preview/dialog-preview.component';
import { PopupPreviewComponent } from './popup-preview/popup-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscountPipe,
    ColorizeDirective,
    BookComponent,
    BooksComponent,
    DialogPreviewComponent,
    PopupPreviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
