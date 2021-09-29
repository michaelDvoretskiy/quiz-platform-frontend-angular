import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendingDiscComponent } from './attending-disc.component';

describe('AttendingDiscComponent', () => {
  let component: AttendingDiscComponent;
  let fixture: ComponentFixture<AttendingDiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendingDiscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendingDiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
