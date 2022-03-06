import { TestBed } from '@angular/core/testing';

//import { BooksService } from './books.service';
import {BooksServicesService} from "./books.service";

describe('BooksService', () => {
  let service: BooksServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
