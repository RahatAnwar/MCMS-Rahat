import { TestBed } from '@angular/core/testing';

//import { BookShopService } from './book-shop.service';
import {BookShopServicesService} from "./book-shop.service";

describe('BookShopService', () => {
  let service: BookShopServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookShopServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
