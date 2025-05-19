import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselFerrariComponent } from './carrossel-ferrari.component';

describe('CarrosselFerrariComponent', () => {
  let component: CarrosselFerrariComponent;
  let fixture: ComponentFixture<CarrosselFerrariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosselFerrariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrosselFerrariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
