import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-video-carrossel',
  imports: [CommonModule],
  templateUrl: './video-carrossel.component.html',
  styleUrl: './video-carrossel.component.css'
})
export class VideoCarrosselComponent {
  videos: string[] = [
    'ford-banner.mp4',
    'ford-raptor.mp4'
  ];

  currentIndex = 0;

  @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef<HTMLVideoElement>>;

  onVideoEnded() {
    this.currentIndex = (this.currentIndex + 1) % this.videos.length;
    setTimeout(() => {
      const videoElement = this.videoPlayers.get(this.currentIndex)?.nativeElement;
      if (videoElement) {
        videoElement.play();
      }
    }, 100);
  }
}
