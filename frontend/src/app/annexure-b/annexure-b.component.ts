import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annexure-b',
  templateUrl: './annexure-b.component.html',
  styleUrl: './annexure-b.component.scss'
})
export class AnnexureBComponent {


    constructor(private router: Router) { }


  navigateToForm() {
    this.router.navigate(['/dashboard']);
  }

}
