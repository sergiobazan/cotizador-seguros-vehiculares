import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizadorListPageComponent } from './cotizador-list-page.component';

describe('CotizadorListPageComponent', () => {
  let component: CotizadorListPageComponent;
  let fixture: ComponentFixture<CotizadorListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CotizadorListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CotizadorListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
