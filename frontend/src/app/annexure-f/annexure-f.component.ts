import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annexure-f',
  templateUrl: './annexure-f.component.html',
  styleUrl: './annexure-f.component.scss'
})
export class AnnexureFComponent {
  businessPartners: any[] = [
    { slNo: 1, nameAddress: '', natureOfBusiness: '', aeoT2Certificate: 'yes' } // Initial row
  ];

  addRow(): void {
    const nextSlNo = this.businessPartners.length + 1;
    this.businessPartners.push({ slNo: nextSlNo, nameAddress: '', natureOfBusiness: '', aeoT2Certificate: 'yes' });
  }


      constructor(private router: Router) { }


    navigateToForm() {
      this.router.navigate(['/dashboard']);
    }

}
