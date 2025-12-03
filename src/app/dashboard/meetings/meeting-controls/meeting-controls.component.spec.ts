import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingControlsComponent } from './meeting-controls.component';

describe('MeetingControlsComponent', () => {
  let component: MeetingControlsComponent;
  let fixture: ComponentFixture<MeetingControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
