import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoStatBarComponent } from './stat-bar.component';

describe('VideoStatBarComponent', () => {
  let component: VideoStatBarComponent;
  let fixture: ComponentFixture<VideoStatBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoStatBarComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoStatBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
