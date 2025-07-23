import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleModel } from '../models/VehicleModel';

@Injectable({
  providedIn: 'root',
})
export class ModelsService {
  private apiUrl = 'http://localhost:3000/models';

  constructor(private http: HttpClient) {}

  getModels(): Observable<VehicleModel[]> {
    return this.http.get<VehicleModel[]>(this.apiUrl);
  }

  getModelById(id: string): Observable<VehicleModel> {
    return this.http.get<VehicleModel>(`${this.apiUrl}/${id}`);
  }

  addModel(model: VehicleModel): Observable<VehicleModel> {
    return this.http.post<VehicleModel>(this.apiUrl, model);
  }

  updateModel(model: VehicleModel): Observable<VehicleModel> {
    return this.http.put<VehicleModel>(`${this.apiUrl}/${model.id}`, model);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
