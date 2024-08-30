import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { TableComponent } from './components/table/table.component';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    CampaignsRoutingModule,
    CardModule
  ],
  declarations: [
    CampaignsComponent,
    TableComponent
  ]
})
export class CampaignsModule { }
