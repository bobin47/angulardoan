import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangchitietComponent } from './trangchitiet.component';

describe('TrangchitietComponent', () => {
  let component: TrangchitietComponent;
  let fixture: ComponentFixture<TrangchitietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrangchitietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangchitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
