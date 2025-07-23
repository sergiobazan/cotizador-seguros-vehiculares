import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosPageComponent } from './modelos-page.component';

describe('ModelosPageComponent', () => {
  let component: ModelosPageComponent;
  let fixture: ComponentFixture<ModelosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelosPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
