import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmultiplebookBooksshopComponent } from './addmultiplebook-booksshop.component';

describe('AddmultiplebookBooksshopComponent', () => {
  let component: AddmultiplebookBooksshopComponent;
  let fixture: ComponentFixture<AddmultiplebookBooksshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmultiplebookBooksshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmultiplebookBooksshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
