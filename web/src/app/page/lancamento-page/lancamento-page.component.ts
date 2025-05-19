import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-lancamento-page',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './lancamento-page.component.html',
  styleUrl: './lancamento-page.component.css'
})
export class LancamentoComponent {

}
