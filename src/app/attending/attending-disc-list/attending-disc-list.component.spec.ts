import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendingDiscListComponent } from './attending-disc-list.component';

describe('AttendingDiscListComponent', () => {
  let component: AttendingDiscListComponent;
  let fixture: ComponentFixture<AttendingDiscListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendingDiscListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendingDiscListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
