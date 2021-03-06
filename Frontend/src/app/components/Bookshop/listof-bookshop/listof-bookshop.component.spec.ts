import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofBookshopsComponent } from './listof-bookshop.component';

describe('ListofBookshopComponent', () => {
  let component: ListofBookshopsComponent;
  let fixture: ComponentFixture<ListofBookshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofBookshopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofBookshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
