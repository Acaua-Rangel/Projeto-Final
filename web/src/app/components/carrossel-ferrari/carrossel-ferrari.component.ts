import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


interface VideoItem {
  src: string;
  poster: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-carrossel-ferrari',
  imports: [NgbCarouselModule, NgbCollapseModule, CommonModule],
  templateUrl: './carrossel-ferrari.component.html',
  styleUrl: './carrossel-ferrari.component.css'
})
export class CarrosselFerrariComponent {
  isMenuCollapsed = true;
  isPlaying: boolean[] = [];
  
  videos: VideoItem[] = [
    {
      src: 'https://example.com/videos/ferrari1.mp4', // Substitua por URLs reais
      poster: 'https://via.placeholder.com/1920x600/333/fff?text=Ferrari+Video+1',
      title: 'Ferrari SF90 Stradale',
      description: 'Discover the power of hybrid technology'
    },
    {
      src: 'https://example.com/videos/ferrari2.mp4',
      poster: 'https://via.placeholder.com/1920x600/555/fff?text=Ferrari+Video+2',
      title: 'Ferrari 812 Competizione',
      description: 'The ultimate front-engine V12'
    },
    {
      src: 'https://example.com/videos/ferrari3.mp4',
      poster: 'https://via.placeholder.com/1920x600/777/fff?text=Ferrari+Video+3',
      title: 'Ferrari Roma',
      description: 'La Nuova Dolce Vita'
    }
  ];

  constructor() {
    // Inicializa o array de estados de reprodução
    this.isPlaying = this.videos.map(() => false);
  }

  togglePlay(videoPlayer: HTMLVideoElement) {
    if (videoPlayer.paused) {
      videoPlayer.play();
      this.isPlaying[this.videos.findIndex(v => v.poster === videoPlayer.poster)] = true;
    } else {
      videoPlayer.pause();
      this.isPlaying[this.videos.findIndex(v => v.poster === videoPlayer.poster)] = false;
    }
  }
}
