import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-msme-1',
  templateUrl: './msme-1.component.html',
  styleUrl: './msme-1.component.scss'
})
export class Msme1Component {

  formData: any = {
    name: '',
    rejectionReason: '',
    iecNo: '',
    gstin: '',
    msmeCertNo: '',
    companyRegNo: '',
    pan: '',
    addressStreet: '',
    addressCity: '',
    siteDetails: '',
    isManufacturer: 'manufacturer',  // Default value
    manufacturingItems: '',
    industrySector: '',
    contactPerson: '',
    designation: '',
    contactNumber: '',
    emailAddress: '',
    importItemsCountries: '',
    exportItemsCountries: '',
    docCount: null,
    businessDuration: null,
    processMap: ''
};


    constructor(private router: Router) { }


  navigateToForm() {
    this.router.navigate(['/dashboard']);
  }


}
