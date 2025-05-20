import { Component } from '@angular/core';
import { VideoCarrosselComponent } from '../video-carrossel/video-carrossel.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-home',
  imports: [
    VideoCarrosselComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.css'
})
export class HeaderHomeComponent {
  constructor(private router: Router) {}

  isCollapsed = true;

  get nome() {
    return sessionStorage.getItem("nome");
  }

  get email() {
    return sessionStorage.getItem("email");
  }

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
