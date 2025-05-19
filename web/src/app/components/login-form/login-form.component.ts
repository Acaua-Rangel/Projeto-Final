import { Component, ElementRef, ViewChild} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../dto/user.dto';
import { Router } from '@angular/router';
import { LoginDTO } from '../../dto/login.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  videoStarted = false;

  constructor(private http: HttpClient, private router: Router) {}

  private messageError(show: boolean): void {
    const messsageError = document.getElementById('message-error') as HTMLElement;
    messsageError.style.display = `${show ? 'block' : 'none'}`;
  };

  private saveUser(user: User, remeber:boolean): void {
    if (remeber) {
      localStorage.setItem("id", user.id.toString());
      localStorage.setItem("nome", user.nome);
      localStorage.setItem("email", user.email);
    } else {
      sessionStorage.setItem("id", user.id.toString());
      sessionStorage.setItem("nome", user.nome);
      sessionStorage.setItem("email", user.email);
    }
    
  }

  togglePasswordVisibility() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const eyeIcon = document.getElementById('eyeIcon');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon?.classList.remove('bi-eye');
      eyeIcon?.classList.add('bi-eye-slash');
    } else {
      passwordInput.type = 'password';
      eyeIcon?.classList.remove('bi-eye-slash');
      eyeIcon?.classList.add('bi-eye');
    }
  }

  playVideo() {
    this.videoStarted = true;

    // Aguarda o DOM atualizar e tenta tocar o vídeo com som
    setTimeout(() => {
      const video = this.videoPlayer.nativeElement;

      // Remove 'muted' dinamicamente para ativar o áudio
      video.muted = false;

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error('Falha ao tentar tocar o vídeo:', error);
        });
      }
    }, 0);
  }

  onVideoEnded() {
    // Redireciona ao final do vídeo
    this.router.navigate(['/']);
  }

  skipVideo() {
    this.router.navigate(['/']);
  }

  submit(event: Event): void {
    event.preventDefault();

    const login = (<HTMLInputElement>document.getElementById('login')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;
    const remeber = (<HTMLInputElement>document.getElementById('flexSwitchCheckDefault')).checked;

    const body: LoginDTO = {
      nome: login,
      senha: password,
    };

    this.http.post('http://localhost:3001/login', body, {
      headers: new HttpHeaders({ 'Accept': 'application/json' }),
      withCredentials: false
    }).subscribe({
      next: (res) => {
        this.messageError(false);
        this.saveUser(res as User, remeber);
        this.playVideo();
      },
      error: (err) => this.messageError(true)
    });
  }
  
}
