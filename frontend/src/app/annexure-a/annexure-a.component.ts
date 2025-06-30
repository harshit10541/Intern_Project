import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annexure-a',
  templateUrl: './annexure-a.component.html',
  styleUrl: './annexure-a.component.scss'
})
export class AnnexureAComponent {
  showCertifiedFields: boolean = false;
  selectedBusinessEntity: string = '';
  businessEntityOptions: string[] = [
    'Importer',
    'Exporter',
    'Logistic Service Provider',
    'Custodian or Terminal Operator',
    'Customs Broker',
    'Warehouse Operator'
  ];
  showSitesListUpload: boolean = false;
  singleAddress: string = '';
  uploadedSitesFile: File | null = null;
  showSitesUpload: boolean = false;
  siteDetails: string = '';  // For manual entry of site details
  selectedEnterpriseSize: string = '';
  uploadedEvidenceFile: File | null = null;

  constructor(private router: Router) { }

  onEvidenceFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.uploadedEvidenceFile = file;
      console.log("Uploaded evidence file:", file.name);
      // Further processing of the uploaded file can be done here
    }
  }


  toggleSitesUpload() {
    this.showSitesUpload = !this.showSitesUpload;
  }

  toggleCertifiedFields(show: boolean) {
    this.showCertifiedFields = show;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // Handle the selected file here (e.g., upload to server, display preview)
      console.log("Selected file:", file.name);
    }

  }


  onBusinessEntityChange(event: any) {
    const newValue = event.target.value;
    if (newValue && !this.businessEntityOptions.includes(newValue)) {
      this.businessEntityOptions = [...this.businessEntityOptions, newValue];
    }
  }

  toggleSitesListUpload() {
    this.showSitesListUpload = !this.showSitesListUpload;
  }

  onSitesFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.uploadedSitesFile = file;
      console.log("Uploaded sites file:", file.name);
      // Further processing of the uploaded file can be done here
    }
  }

  navigateToForm() {
    this.router.navigate(['/dashboard']);
  }


}
