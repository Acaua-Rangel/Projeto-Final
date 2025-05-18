import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import isLogged from '../../services/islogged.service';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    NgbCollapseModule,
    NgbDropdownModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  constructor(private router: Router) {}

  get nome() {
    return sessionStorage.getItem("nome");
  }

  get email() {
    return sessionStorage.getItem("email");
  }


  isMenuCollapsed = true;

  logOut(event: Event) {
    event.preventDefault();
    
    // Limpa todos os itens relevantes
    sessionStorage.clear();
    localStorage.clear();
    
    // Força o redirecionamento
    this.router.navigate(['/login'])
      .then(() => {
        window.location.reload(); // Recarrega a página para limpar qualquer estado residual
      })
      .catch(err => {
        console.error('Erro no redirecionamento:', err);
        window.location.href = '/login'; // Fallback absoluto
      });
  }
}
