import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';
import isLogged from '../../services/islogged.service';

@Component({
  selector: 'app-welcome-page',
  imports: [HeaderComponent],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!isLogged()) {
      console.log("oi")
      this.router.navigate(['/login']);
    }
  }
}
