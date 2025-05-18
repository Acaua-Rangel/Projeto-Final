import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { HttpClient } from '@angular/common/http';
import { vehicle } from '../../dto/vehicle.dto';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-car-model',
  imports: [CardComponent],
  templateUrl: './car-model.component.html',
  styleUrl: './car-model.component.css'
})
export class CarModelComponent implements OnInit {
  constructor(private http: HttpClient) {}

  @Input() form!: FormGroup;

  index = -1;

  data: vehicle[] = [];

  ngOnInit(): void {
    this.fetchData();
  }


  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    
    if (selectedValue) {
      this.index = Number(selectedValue);
    }
  }

  private fetchData() {
    // Substitua pela sua URL de API
    const apiUrl = `http://localhost:3001/vehicles`;
    
    this.http.get<vehicle[]>(apiUrl).subscribe({
      next: (response) => {
        this.data = response as vehicle[];
      },
      error: (err) => {
        console.error('Erro na requisição:', err);
      }
    });
  }
  
  get sells(): string {
    if (this.index >= 0 && this.index < Object.keys(this.data).length) {
      return this.data[this.index].volumetotal.toString();
    } 
    return "--"
  }

  get conects(): string {
    if (this.index >= 0 && this.index < Object.keys(this.data).length) {
      return this.data[this.index].connected.toString();
    } 
    return "--"
  }

  get updates(): string {
    if (this.index >= 0 && this.index < Object.keys(this.data).length) {
      return this.data[this.index].softwareUpdates.toString();
    } 
    return "--"
  }

  get img(): string {
    if (this.index >= 0 && this.index < Object.keys(this.data).length) {
      return this.data[this.index].img.toString();
    } 
    return this.data[0].img.toString();
  }
}
