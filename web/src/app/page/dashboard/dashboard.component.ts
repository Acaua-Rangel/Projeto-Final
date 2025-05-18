import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CarModelComponent } from '../../components/car-model/car-model.component';
import { VinSearchComponent } from '../../components/vim-search/vin-search.component';
import isLogged from '../../services/islogged.service';
import { FormControl, FormGroup,  ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, CarModelComponent, VinSearchComponent, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}
  carForm!: FormGroup;

  ngOnInit(): void {
    if (!isLogged()) {
      this.router.navigate(['/login']);
    }
    this.carForm = new FormGroup({
      carModel: new FormControl(null)
    });
  }

  onSelectValue(val: number) {
    console.log(val);
    this.carForm.get('carModel')?.setValue(val);
  }
}
