import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemphimComponent } from './themphim.component';

describe('ThemphimComponent', () => {
  let component: ThemphimComponent;
  let fixture: ComponentFixture<ThemphimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemphimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemphimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
