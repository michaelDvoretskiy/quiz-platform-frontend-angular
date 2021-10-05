import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendingAllComponent } from './attending-disc.component';

describe('AttendingDiscComponent', () => {
  let component: AttendingAllComponent;
  let fixture: ComponentFixture<AttendingAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendingAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendingAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
