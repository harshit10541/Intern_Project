import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annexure-e.5',
  templateUrl: './annexure-e.5.component.html',
  styleUrl: './annexure-e.5.component.scss'
})
export class AnnexureE5Component {

  formDataE51: any = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    remarksA: '',
    remarksB: '',
    remarksC: '',
    remarksD: '',
    remarksE: '',
    remarksF: ''
};

formDataE52: any = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
    h: null,
    i: null,
    j: null,
    k: null,
    l: null,
    m: null,
    n: null,
    o: null,
    remarksA: '',
    remarksB: '',
    remarksC: '',
    remarksD: '',
    remarksE: '',
    remarksF: '',
    remarksG: '',
    remarksH: '',
    remarksI: '',
    remarksJ: '',
    remarksK: '',
    remarksL: '',
    remarksM: '',
    remarksN: '',
    remarksO: ''
};

formDataE53: any = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
    h: null,
    i: null,
    j: null,
    k: null,
    l: null,
    remarksA: '',
    remarksB: '',
    remarksC: '',
    remarksD: '',
    remarksE: '',
    remarksF: '',
    remarksG: '',
    remarksH: '',
    remarksI: '',
    remarksJ: '',
    remarksK: '',
    remarksL: ''
};

formDataE54: any = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
    h: null,
    i: null,
    remarksA: '',
    remarksB: '',
    remarksC: '',
    remarksD: '',
    remarksE: '',
    remarksF: '',
    remarksG: '',
    remarksH: '',
    remarksI: ''
};

formDataE55: any = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    remarksA: '',
    remarksB: '',
    remarksC: '',
    remarksD: '',
    remarksE: ''
};

formDataE56: any = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    remarksA: '',
    remarksB: '',
    remarksC: '',
    remarksD: '',
    remarksE: '',
    remarksF: ''
};

formDataE57: any = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    remarksA: '',
    remarksB: '',
    remarksC: '',
    remarksD: '',
    remarksE: ''
};

onFileE57DSelected(event: any) {
  const files: FileList = event.target.files;
  this.formDataE57.fileD = [];

  if (files) {
    for (let i = 0; i < files.length; i++) {
      this.formDataE57.fileD.push(files[i]);
    }
  }
}

    constructor(private router: Router) { }


  navigateToForm() {
    this.router.navigate(['/dashboard']);
  }

}
