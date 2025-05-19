import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-lancamento-page',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './lancamento-page.component.html',
  styleUrl: './lancamento-page.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class LancamentoComponent implements AfterViewInit {
  @ViewChild('lista', { static: false }) lista!: ElementRef<HTMLUListElement>;
  @ViewChild('compareDialog', { static: false }) dialog!: ElementRef<HTMLDialogElement>;
  items = [
    {
      name: "cabine",
      imagem: "img/XL Cabine.jpg",
      titulo: "XL Cabine Simples 2.2 Diesel 4X4 MT 2022",
      preco: 183850,
      alturaCacamba: 511,
      alturaVeiculo: 1821,
      alturaSolo: 232,
      capacidadeCarga: 1234,
      motor: 2.2,
      potencia: 160,
      volumeCacamba: 1420,
      roda: 'Aço Estampado 16',
    },
    {
      name: "diesel",
      imagem: "img/xls 2.2 diesel.jpg",
      titulo: "XLS 2.2 Diesel 4X4 AT 2022",
      preco: 220690,
      alturaCacamba: 511,
      alturaVeiculo: 1821,
      alturaSolo: 232,
      capacidadeCarga: 1076,
      motor: 2.2,
      potencia: 160,
      volumeCacamba: 1180,
      roda: 'Aço Estampado 16',
    },
    {
      name: "storm",
      imagem: "img/storm.jpg",
      titulo: "Storm 3.2 Diesel 4X4 AT 2022",
      preco: 222790,
      alturaCacamba: 511,
      alturaVeiculo: 1821,
      alturaSolo: 232,
      capacidadeCarga: 1040,
      motor: 3.2,
      potencia: 200,
      volumeCacamba: 1180,
      roda: 'Liga Leve 17',
    },
  ];  
  selectedCars: number[] = [];

  closeBtn = document.getElementById("close_compare");

  ngAfterViewInit() {
    this.items.forEach((item, index) => {
        this.createItem(item, index);
    });
  }

  createItem(item: any, index: number) {
    const objetoLista = document.createElement("li");
    objetoLista.id = item.name;

    const objetoImagem = document.createElement("img");
    objetoImagem.src = item.imagem;
    objetoImagem.classList.add("photocar");

    const infoCarDiv = document.createElement("div");
    infoCarDiv.classList.add("infocar");

    const checkboxDiv = document.createElement("div");

    const checkboxItem = document.createElement("input");
    checkboxItem.type = "checkbox";
    checkboxItem.value = index.toString();
    checkboxItem.classList.add("checkbox");

    checkboxItem.onclick = (event) => this.SetCarToCompare(index, event);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const itemModel = document.createElement("span");
    itemModel.innerText = item.titulo;
    itemModel.classList.add("textmodel");

    const itemPrice = document.createElement("span");
    itemPrice.innerText = `Preço Sugerido: R$ ${item.preco.toLocaleString('pt-BR')}`;
    itemPrice.classList.add("textprice");

    const iconDiv = document.createElement("div");
    
    infoDiv.appendChild(itemModel);
    infoDiv.appendChild(itemPrice);
    checkboxDiv.appendChild(checkboxItem);
    infoCarDiv.appendChild(checkboxDiv);
    infoCarDiv.appendChild(infoDiv);
    infoCarDiv.appendChild(iconDiv);
    objetoLista.appendChild(objetoImagem);
    objetoLista.appendChild(infoCarDiv);

    this.lista.nativeElement.appendChild(objetoLista);
  }

  SetCarToCompare(index: number, event: Event) {
    if (this.selectedCars.includes(index)) {
      this.selectedCars = this.selectedCars.filter(i => i !== index);
    } else {
      if (this.selectedCars.length >= 2) {
        alert("Para comparação, o máximo de itens são dois.");
        (event.target as HTMLInputElement).checked = false;
        return;
      }
      this.selectedCars.push(index);
    }
  }

  ShowCompare() {
    if (this.selectedCars.length === 2) {
      this.UpdateCompareTable();
      this.dialog.nativeElement.showModal();
    } else {
      alert("Para comparação, é necessário marcar dois itens");
    }
  }

    HideCompare() {
    this.dialog.nativeElement.close();
  }

    UpdateCompareTable() {
    const [car1, car2] = [this.items[this.selectedCars[0]], this.items[this.selectedCars[1]]];

    const setText = (id: string, value: string | number) => {
      const el = document.getElementById(id);
      if (el) el.innerText = value.toString();
    };
    const setImage = (id: string, src: string) => {
      const img = document.getElementById(id) as HTMLImageElement;
      if (img) img.src = src;
    };

    setImage("compare_image_0", car1.imagem);
    setImage("compare_image_1", car2.imagem);

    setText("compare_modelo_0", car1.titulo);
    setText("compare_modelo_1", car2.titulo);
    setText("compare_alturacacamba_0", car1.alturaCacamba);
    setText("compare_alturacacamba_1", car2.alturaCacamba);
    setText("compare_alturaveiculo_0", car1.alturaVeiculo);
    setText("compare_alturaveiculo_1", car2.alturaVeiculo);
    setText("compare_alturasolo_0", car1.alturaSolo);
    setText("compare_alturasolo_1", car2.alturaSolo);
    setText("compare_capacidadecarga_0", car1.capacidadeCarga);
    setText("compare_capacidadecarga_1", car2.capacidadeCarga);
    setText("compare_motor_0", car1.motor);
    setText("compare_motor_1", car2.motor);
    setText("compare_potencia_0", car1.potencia);
    setText("compare_potencia_1", car2.potencia);
    setText("compare_volumecacamba_0", car1.volumeCacamba);
    setText("compare_volumecacamba_1", car2.volumeCacamba);
    setText("compare_roda_0", car1.roda);
    setText("compare_roda_1", car2.roda);
    setText("compare_preco_0", `R$ ${car1.preco.toLocaleString('pt-BR')}`);
    setText("compare_preco_1", `R$ ${car2.preco.toLocaleString('pt-BR')}`);
  }
    
}
