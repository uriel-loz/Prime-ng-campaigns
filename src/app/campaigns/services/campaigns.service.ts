import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Campaign, Pagination } from '../interfaces/campaigns.interface';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
  private baseUrl = 'http://localhost:8000/api/campaigns'
  private http = inject(HttpClient);

  getCampaigns(page:number, rows: number, sortField: string, sortOrder: number): Observable<Pagination> {
    const params = new HttpParams()
    .set('page', page)
    .set('size', rows)
    .set('sort_field', sortField)
    .set('order', sortOrder);

    return this.http.get<Pagination>(this.baseUrl, { params });
  }

  saveCampaign(data: Campaign): Observable<boolean> {
    return this.http.post<Campaign>(this.baseUrl, data)
      .pipe(catchError(error => of(false)))
      .pipe(map(() => true));
  }
}
