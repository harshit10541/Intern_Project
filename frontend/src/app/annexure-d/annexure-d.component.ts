import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annexure-d',
  templateUrl: './annexure-d.component.html',
  styleUrl: './annexure-d.component.scss'
})
export class AnnexureDComponent {

    constructor(private router: Router) { }


  navigateToForm() {
    this.router.navigate(['/dashboard']);
  }

}
