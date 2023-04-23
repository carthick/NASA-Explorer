import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=';

  constructor(private http: HttpClient) { }

  getRovers(apiKey: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${apiKey}`);
  }
}
