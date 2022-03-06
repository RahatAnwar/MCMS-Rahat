import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofBookComponent } from './listof-book.component';

describe('ListofBookComponent', () => {
  let component: ListofBookComponent;
  let fixture: ComponentFixture<ListofBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
