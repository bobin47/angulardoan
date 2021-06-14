import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangdangkyComponent } from './dangdangky.component';

describe('DangdangkyComponent', () => {
  let component: DangdangkyComponent;
  let fixture: ComponentFixture<DangdangkyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangdangkyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangdangkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
