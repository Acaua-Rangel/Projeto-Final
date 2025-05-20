import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCarrosselComponent } from './video-carrossel.component';

describe('VideoCarrosselComponent', () => {
  let component: VideoCarrosselComponent;
  let fixture: ComponentFixture<VideoCarrosselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCarrosselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoCarrosselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
