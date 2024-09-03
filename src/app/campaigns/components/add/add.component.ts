import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CampaignsService } from '../../services/campaigns.service';
import Swal from 'sweetalert2';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'campaigns-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  public visible: boolean = false;
  private formBuilder = inject(FormBuilder);
  private campaignService = inject(CampaignsService);
  private sharedService = inject(SharedService);

  public myForm: FormGroup = this.formBuilder.group({
    campaign_name: ['', Validators.required],
    start_date: ['', Validators.required],
    end_date: ['', Validators.required],
  });

  openModal() {
    this.visible = true;
  }

  hideDialog() {
    this.myForm.reset();
    this.visible = false;
  }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    Swal.fire({
      title: 'Wait',
      text: 'Saving information',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.campaignService.saveCampaign(this.myForm.value)
      .subscribe((resp: boolean) => {
        if (resp) {
          Swal.fire({
            title: 'Success',
            text: 'The campaign was saved successfully',
            icon: 'success'
          });
          this.sharedService.refreshTable();
          this.hideDialog();
        } else {
          Swal.fire({
            title: 'Error',
            text: 'The campaign could not be saved',
            icon: 'error'
          });
        }
      });
  }
}
