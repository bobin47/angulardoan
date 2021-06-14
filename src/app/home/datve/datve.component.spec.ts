import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatveComponent } from './datve.component';

describe('DatveComponent', () => {
  let component: DatveComponent;
  let fixture: ComponentFixture<DatveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
