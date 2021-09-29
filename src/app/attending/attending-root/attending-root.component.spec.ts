import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendingRootComponent } from './attending-root.component';

describe('AttendingRootComponent', () => {
  let component: AttendingRootComponent;
  let fixture: ComponentFixture<AttendingRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendingRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendingRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
