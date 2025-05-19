import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  nome!:string;
  email!:string;
  telefone!:string;
  motivo:string = "";
  mensagem!:string;

  updateValuesBtn(event:Event) {
    if ((document.getElementById("contato") as HTMLInputElement).value !== "") {
      console.log(this.debug());
  } else {
      alert("Você deve selecionar um motivo de contato");
    }
    event.preventDefault();
  }

  debug() {
    return {
      "nome": this.nome, 
      "email": this.email, 
      "telefone": this.telefone, 
      "motivo": this.motivo, 
      "mensagem": this.mensagem,
    };
  }

  applyMaskCPF(event:Event) {
    let cpf = (event.target as HTMLInputElement).value.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    (event.target as HTMLInputElement).value = cpf;
  }
  
  applyMaskTel(event:Event) {
    let telefone = (event.target as HTMLInputElement).value.replace(/\D/g, "");
    telefone = telefone.replace(/(\d{2})(\d)/, "($1) $2");
    telefone = telefone.replace(/(\d{5})(\d{1,4})$/, "$1-$2");
    (event.target as HTMLInputElement).value = telefone;
  }
}
