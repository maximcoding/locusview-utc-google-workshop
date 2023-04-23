import {TestBed} from '@angular/core/testing';

import {BooksService} from './books.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {BOOK_MOCK} from "../mocks/books";

describe('BooksService', () => {
  let service: BooksService;
  const mock: any[] = BOOK_MOCK;

  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: []
    });
    service = TestBed.inject(BooksService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getBooks() and return value', () => {
    service.getBooks('maxim')
      .subscribe(result => {
          expect(result).toBeTruthy();
          expect(result.length).toBe(9);
          expect(result[0].title).toEqual(mock[0].title);
        });
    const req = httpController.expectOne(`${service.BASE_URL}?q=maxim`);
    expect(req.request.method).toEqual('GET');
    req.flush(mock); // fake response data
    httpController.verify(); // cleaning queue
  });

  it('should test network error', () => {
    service.getBooks('maxim').subscribe(
      () => fail(), // fail in purpose
      (error) => {
        expect(error.message).toEqual('Internal Server Error');
        expect(error.status).toBe(500);
      });
    const req = httpController.expectOne(`${service.BASE_URL}?q=maxim`);
    const error = new ErrorEvent('', {message: 'Internal Server Error'});
    req.error(error, {status: 500});
    httpController.verify(); // cleaning queue
  });

});
