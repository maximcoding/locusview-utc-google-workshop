import {ComponentFixture, fakeAsync, flush, TestBed, waitForAsync} from '@angular/core/testing';

import {BooksComponent} from './books.component';
import {BOOK_MOCK} from "../../mocks/books";
import {delay, of} from "rxjs";
import {BooksService} from "../books.service";
import {By} from "@angular/platform-browser";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BookComponent} from "./book/book.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {DialogPreviewComponent} from "../dialog-preview/dialog-preview.component";
import {HarnessLoader} from "@angular/cdk/testing";
import {TestbedHarnessEnvironment} from "@angular/cdk/testing/testbed";
import {MatDialogHarness} from "@angular/material/dialog/testing";

describe('BooksComponent', () => {

  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  const bookServiceMock = {
    getBooks: (term: string) => {
      return of(BOOK_MOCK).pipe(delay(10));
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksComponent, BookComponent, DialogPreviewComponent],
      imports: [HttpClientTestingModule, MatDialogModule, NoopAnimationsModule],
      providers: [
        {provide: BooksService, userValue: bookServiceMock}
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //
  // it('should render books', waitForAsync(async () => {
  //   await fixture.whenStable();
  //   fixture.detectChanges();
  //   const items = fixture.debugElement.queryAll(By.css('.book-item'));
  //   console.log('booksEl', items);
  // }));

  it('should be open dialog when clicking item', () => {
    const openDialogSpy = jest.spyOn(component.dialog, 'open');f
    component.previewItem(BOOK_MOCK[0]);
    expect(openDialogSpy).toHaveBeenCalledTimes(1);
  });

  it('should show dialog when clicking on item', async () => {

    const loader: HarnessLoader = TestbedHarnessEnvironment.documentRootLoader(fixture);
    const dialog = await loader.getAllHarnesses(MatDialogHarness)
    expect(dialog.length).toEqual(1);
  });

});


