import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendingCurrentAdminComponent } from './attending-current-admin.component';

describe('AttendingCurrentAdminComponent', () => {
  let component: AttendingCurrentAdminComponent;
  let fixture: ComponentFixture<AttendingCurrentAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendingCurrentAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendingCurrentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
