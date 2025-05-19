import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import isLogged from '../../services/islogged.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { VideoCarrosselComponent } from '../../components/video-carrossel/video-carrossel.component';

@Component({
  selector: 'app-welcome-page',
  imports: [FooterComponent, VideoCarrosselComponent],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!isLogged()) {
      this.router.navigate(['/login']);
    }
  }
}
