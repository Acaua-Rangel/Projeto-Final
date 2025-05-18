import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { vinDTO } from '../../dto/vin.dto';

@Component({
  selector: 'app-vin-search',
  imports: [],
  templateUrl: './vin-search.component.html',
  styleUrl: './vin-search.component.css'
})
export class VinSearchComponent {
  constructor(private http: HttpClient) {}

  @Output() selectValue = new EventEmitter<number>();

  data: vinDTO = {
    "id": 0,
    "odometro": 0,
    "nivelCombustivel": 0,
    "status": "off",
    "lat": 0,
    "long": 0
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLSelectElement;
    const inputValue = inputElement.value;
    
    if (inputValue) {
      this.fetchData(inputValue);
    }
  }

  private fetchData(vin: string): void {
    // Substitua pela sua URL de API
    const apiUrl = `http://localhost:3001/vehicleData`;
    
    this.http.post<vinDTO>(apiUrl, {"vin": vin}).subscribe({
      next: (response) => {
        this.data = response;
        this.chageCar(response.id);
      },
      error: (err) => {
        console.error('Erro na requisição:', err);
      }
    });
  }

  private chageCar(id: number): void {
    console.log(id);
    this.selectValue.emit(id);
  }

  get odometer(): string {
    return this.data.odometro.toString();
  }

  get fuel(): string {
    return this.data.nivelCombustivel.toString();
  }

  get status(): string {
    return this.data.status;
  }

  get lat(): string {
    return this.data.lat.toString();
  }

  get long(): string {
    return this.data.long.toString();
  }
}
