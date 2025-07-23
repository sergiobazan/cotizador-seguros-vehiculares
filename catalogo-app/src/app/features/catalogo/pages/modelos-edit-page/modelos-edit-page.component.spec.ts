import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosEditPageComponent } from './modelos-edit-page.component';

describe('ModelosEditPageComponent', () => {
  let component: ModelosEditPageComponent;
  let fixture: ComponentFixture<ModelosEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelosEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelosEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
