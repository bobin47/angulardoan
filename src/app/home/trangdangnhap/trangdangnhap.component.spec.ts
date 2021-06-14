import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangdangnhapComponent } from './trangdangnhap.component';

describe('TrangdangnhapComponent', () => {
  let component: TrangdangnhapComponent;
  let fixture: ComponentFixture<TrangdangnhapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrangdangnhapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangdangnhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
