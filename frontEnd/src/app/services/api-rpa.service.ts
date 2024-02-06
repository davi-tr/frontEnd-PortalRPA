import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '/home/davi/Documents/frontEnd-PortalRPA/frontEnd/src/app/types/response.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:8083/RPA';

  constructor(private http: HttpClient) {}

  getData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}