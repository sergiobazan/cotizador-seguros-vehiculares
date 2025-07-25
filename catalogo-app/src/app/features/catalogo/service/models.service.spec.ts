import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ModelsService } from './models.service';
import { VehicleModel } from '../models/VehicleModel';

describe('ModelsService', () => {
  let service: ModelsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ModelsService],
    });
    service = TestBed.inject(ModelsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch all vehicle models', () => {
    const mockModels: VehicleModel[] = [
      { id: '1', brand: 'Toyota', model: 'Corolla', year: 2020 },
    ];

    service.getModels().subscribe((models) => {
      expect(models.length).toBe(1);
      expect(models[0].brand).toBe('Toyota');
    });

    const req = httpMock.expectOne('http://localhost:3000/models');
    expect(req.request.method).toBe('GET');
    req.flush(mockModels);
  });
});
