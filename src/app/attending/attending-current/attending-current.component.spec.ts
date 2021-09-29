import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendingCurrentComponent } from './attending-current.component';

describe('AttendingCurrentComponent', () => {
  let component: AttendingCurrentComponent;
  let fixture: ComponentFixture<AttendingCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendingCurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendingCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
