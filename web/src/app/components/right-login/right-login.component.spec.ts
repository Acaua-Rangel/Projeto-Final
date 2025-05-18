import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightLoginComponent } from './right-login.component';

describe('RightLoginComponent', () => {
  let component: RightLoginComponent;
  let fixture: ComponentFixture<RightLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
