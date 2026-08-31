import { TestBed } from '@angular/core/testing';
import { MovieLists } from './movie-lists';

describe('MovieLists', () => {
  let service: MovieLists;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieLists);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
