import { Component, inject, OnInit } from '@angular/core';
import { Campaign, Pagination } from '../../interfaces/campaigns.interface';
import { CampaignsService } from '../../services/campaigns.service';
import { TableLazyLoadEvent } from 'primeng/table';
import { finalize } from 'rxjs';

@Component({
  selector: 'campaigns-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  private campaignService = inject(CampaignsService);
  public campaigns: Campaign[] = [];
  public loading: boolean = false;
  public paginationOptions: (number | {showAll: string})[] = [10, 20, 50, {showAll:'All'}];
  public initialPage: number = 1;
  public quantityRows: number = 10;
  public sortOrder: number = -1;
  public sortField: string = 'updated_at';
  public totalRecords!: number;
  public first!: number;
  public last!: number;

  ngOnInit() {
    this.loading = true;
    this.getCampaigns(this.initialPage, this.quantityRows, this.sortField, this.sortOrder);
  }

  getCampaigns(page: number, quantityRows: number, sortField: string, sortOrder: number) {
    this.campaignService.getCampaigns(page, quantityRows, sortField, sortOrder)
      .pipe(finalize(() => this.loading = false))
      .subscribe(({ data, total, from, to }) => {
        this.campaigns = data;
        this.totalRecords = total;
        this.first = from;
        this.last = to;
      })
  }

  loadLazy(event: TableLazyLoadEvent) {
    this.loading = true;
    const { first, rows, sortField, sortOrder } = event;
    const page: number = (first ?? 0) / (rows ?? this.quantityRows) + 1;
    const size: number = (rows ?? this.quantityRows);
    const sortFieldSet: string = Array.isArray(sortField) ? sortField.join(',') : (sortField ?? this.sortField);

    this.getCampaigns(page, size, sortFieldSet, sortOrder ?? this.sortOrder);
  }

  openModal() {

  }

}
