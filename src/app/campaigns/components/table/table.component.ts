import { Component, inject, OnInit } from '@angular/core';
import { Campaign, Pagination } from '../../interfaces/campaigns.interface';
import { CampaignsService } from '../../services/campaigns.service';

@Component({
  selector: 'campaigns-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  private campaignService = inject(CampaignsService);
  public campaigns: Campaign[] = [];
  public quantityRows: number = 10;
  public paginationOptions: number[] = [10, 20, 50];
  public sortField: string = 'updated_at';
  public sortOrder: number = -1;

  ngOnInit() {
    this.getCampaigns();
  }

  getCampaigns() {
    this.campaignService.getCampaigns()
      .subscribe(({ data }) => {
        this.campaigns = data
      })
  }

}
