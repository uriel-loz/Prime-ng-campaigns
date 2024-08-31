import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pagination } from '../interfaces/campaigns.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
  private baseUrl = 'http://localhost:8000/api/campaigns'
  private http = inject(HttpClient);

  getCampaigns(): Observable<Pagination> {
    return this.http.get<Pagination>(this.baseUrl);
  }
}
