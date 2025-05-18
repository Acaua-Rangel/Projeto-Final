import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinSearchComponent } from './vin-search.component';

describe('VimSearchComponent', () => {
  let component: VinSearchComponent;
  let fixture: ComponentFixture<VinSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VinSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
