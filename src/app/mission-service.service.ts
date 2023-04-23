import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from './mission';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MissionServiceService {

  constructor(private http: HttpClient) { 
    
  }
  // getMissionDetails(missionId: string): Observable<Mission> {
    // return this.http.get<Mission>(`${this.baseUrl}/missions/${missionId}`, { params: this.params });
  // }
  
}
