import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosListPageComponent } from './modelos-list-page.component';

describe('ModelosListPageComponent', () => {
  let component: ModelosListPageComponent;
  let fixture: ComponentFixture<ModelosListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelosListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelosListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
