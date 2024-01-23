import { TestBed } from '@angular/core/testing';
import { DataService } from './api-rpa.service'; // Certifique-se de importar o serviço correto

describe('ApiRPAService', () => {
  let service: DataService; // Certifique-se de usar o tipo correto

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService], // Certifique-se de incluir o serviço no array de providers
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
