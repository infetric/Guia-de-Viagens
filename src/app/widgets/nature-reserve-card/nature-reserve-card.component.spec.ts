import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureReserveCardComponent } from './nature-reserve-card.component';

describe('NatureReserveCardComponent', () => {
  let component: NatureReserveCardComponent;
  let fixture: ComponentFixture<NatureReserveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NatureReserveCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NatureReserveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
