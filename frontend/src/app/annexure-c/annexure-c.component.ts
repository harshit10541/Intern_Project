import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annexure-c',
  templateUrl: './annexure-c.component.html',
  styleUrl: './annexure-c.component.scss'
})
export class AnnexureCComponent {


      constructor(private router: Router) { }


    navigateToForm() {
      this.router.navigate(['/dashboard']);
    }

}
