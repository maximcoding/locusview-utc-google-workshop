import {delay, of} from "rxjs";
import {fakeAsync, flush, tick} from "@angular/core/testing";

describe('Async Test', () => {
  let flag = false;
  beforeEach(() => {
    flag = true;
  });

  it('sync test', () => {
    expect(flag).toBeFalsy();
    flag = true;
    expect(flag).toBeTruthy();
  });

  it('async test', (done) => {
    setTimeout(() => {
      flag = true;
      expect(flag).toBeTruthy();
      console.log('1kkkk');
      done(); // bad practice ( waits 2 seconds )
    }, 2000);
  });

  it('async test - Observables', (done) => {
    of(1).pipe(delay(3000))
      .subscribe(() => {
        flag = true;
        expect(flag).toBeTruthy();
        done();
      });
  });

  it('async test - Observables', fakeAsync(() => {
    of(1).pipe(delay(3000))
      .subscribe(() => {
        flag = true;
      });
    tick(2000); // bad practice
    expect(flag).toBeFalsy();
    tick(1000); // bad practice
    expect(flag).toBeTruthy();
  }));


  it('async test - Observables - best practice', fakeAsync(() => {
    of(1).pipe(delay(3000))
      .subscribe(() => {
        flag = true;
      });
    expect(flag).toBeFalsy();
    flush(); // best practice
    expect(flag).toBeTruthy();
  }));

})
