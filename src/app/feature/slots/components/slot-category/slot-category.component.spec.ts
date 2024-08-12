import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotCategoryComponent } from './slot-category.component';

describe('SlotCategoryComponent', () => {
  let component: SlotCategoryComponent;
  let fixture: ComponentFixture<SlotCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlotCategoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
