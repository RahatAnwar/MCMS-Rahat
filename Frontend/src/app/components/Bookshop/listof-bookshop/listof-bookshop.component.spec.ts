import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofBookshopComponent } from './listof-bookshop.component';

describe('ListofBookshopComponent', () => {
  let component: ListofBookshopComponent;
  let fixture: ComponentFixture<ListofBookshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofBookshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofBookshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
