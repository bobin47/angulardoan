import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GheNgoiComponent } from './ghe-ngoi.component';

describe('GheNgoiComponent', () => {
  let component: GheNgoiComponent;
  let fixture: ComponentFixture<GheNgoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GheNgoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GheNgoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
