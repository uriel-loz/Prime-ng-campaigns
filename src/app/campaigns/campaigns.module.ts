import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { TableComponent } from './components/table/table.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AddComponent } from './components/add/add.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CampaignsRoutingModule,
    CardModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FloatLabelModule,
    ReactiveFormsModule
  ],
  declarations: [
    CampaignsComponent,
    TableComponent,
    AddComponent
  ]
})
export class CampaignsModule { }
