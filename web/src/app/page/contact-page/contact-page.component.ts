import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router } from '@angular/router';
import isLogged from '../../services/islogged.service';

@Component({
  selector: 'app-contact-page',
  imports: [HeaderComponent, ContactFormComponent, FooterComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
      if (!isLogged()) {
        this.router.navigate(['/login']);
      }
    }
}
