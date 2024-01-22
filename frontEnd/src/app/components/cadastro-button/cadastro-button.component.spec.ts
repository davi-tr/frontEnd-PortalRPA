import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroButtonComponent } from './cadastro-button.component';

describe('CadastroButtonComponent', () => {
  let component: CadastroButtonComponent;
  let fixture: ComponentFixture<CadastroButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
