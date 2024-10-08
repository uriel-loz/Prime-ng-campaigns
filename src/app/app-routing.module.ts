import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'campaigns',
    loadChildren: () => import('./campaigns/campaigns.module').then(m => m.CampaignsModule)
  },
  {
    path: '**',
    redirectTo: 'campaigns'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
