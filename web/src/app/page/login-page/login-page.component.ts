import { Component, OnInit } from '@angular/core';
import { RightLoginComponent } from '../../components/right-login/right-login.component'; 
import isLogged from '../../services/islogged.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [RightLoginComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (isLogged()) {
      console.log("oi")
      this.router.navigate(['/']);
    }
  }
}
