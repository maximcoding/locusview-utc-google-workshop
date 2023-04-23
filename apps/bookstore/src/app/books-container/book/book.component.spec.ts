import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookComponent} from './book.component';
import {By} from "@angular/platform-browser";
import {BOOK_MOCK} from "../../../mocks/books";
import spyOn = jest.spyOn;

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = BOOK_MOCK[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should render component for specific item', () => {
    const title = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(title.textContent).toEqual(BOOK_MOCK[0].title);
  });


  it('should remove from card by clicking the remove btn', () => {
    spyOn(component.deleteClicked, 'emit');
    const removeButton: HTMLButtonElement = fixture.debugElement.query(By.css('.delete-button')).nativeElement;
    removeButton.click();
    // expect(component.deleteClicked).toHaveBeenCalledTimes(1);
  });
});
