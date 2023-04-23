import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {BooksService} from "./books.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule],
      providers: [BooksService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
