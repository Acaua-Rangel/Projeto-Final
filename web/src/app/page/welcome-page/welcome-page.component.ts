import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import isLogged from '../../services/islogged.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderHomeComponent } from '../../components/header-home/header-home.component';

@Component({
  selector: 'app-welcome-page',
  imports: [FooterComponent, HeaderHomeComponent],
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
