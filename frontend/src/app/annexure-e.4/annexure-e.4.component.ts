import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annexure-e.4',
  templateUrl: './annexure-e.4.component.html',
  styleUrl: './annexure-e.4.component.scss'
})
export class AnnexureE4Component {

  formDataE4: any = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
    h: null,
    remarksA: '',
    remarksB: '',
    remarksC: '',
    remarksD: '',
    remarksE: '',
    remarksF: '',
    remarksG: '',
    remarksH: ''
};



    constructor(private router: Router) { }


  navigateToForm() {
    this.router.navigate(['/dashboard']);
  }

}
