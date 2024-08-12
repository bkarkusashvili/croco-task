import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotGamesComponent } from './slot-games.component';

describe('SlotGamesComponent', () => {
  let component: SlotGamesComponent;
  let fixture: ComponentFixture<SlotGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
