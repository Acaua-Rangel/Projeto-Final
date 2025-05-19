import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';
import isLogged from '../../services/islogged.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarrosselFerrariComponent } from '../../components/carrossel-ferrari/carrossel-ferrari.component';

@Component({
  selector: 'app-welcome-page',
  imports: [HeaderComponent, FooterComponent, CarrosselFerrariComponent],
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
