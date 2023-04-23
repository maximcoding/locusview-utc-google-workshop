import {DiscountPipe} from './discount.pipe';
import {BOOK_MOCK} from "../mocks/books";

describe('DiscountPipe', () => {
  let pipe: DiscountPipe;

  beforeEach(() => {
    pipe = new DiscountPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should be discount if price is more than 50', () => {
    const item1 = BOOK_MOCK[0];
    const res: number = pipe.transform(item1.price, 0.1);
    expect(res).toEqual(1.34);
  });

});
