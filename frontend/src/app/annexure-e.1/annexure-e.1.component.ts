import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annexure-e.1',
  templateUrl: './annexure-e.1.component.html',
  styleUrl: './annexure-e.1.component.scss'
})
export class AnnexureE1Component {
  formData: any = {
    a: null,
    b: null,
    d: null,
    e: null,
    f: null,
    g: null,
    remarksA: '',
    remarksB: '',
    remarksC: '',
    remarksD: '',
    remarksE: '',
    remarksF: '',
    remarksG: ''
};


onFileDSelected(event: any) {
  const files: FileList = event.target.files; // Get the selected files as a FileList
  this.formData.fileD = []; // Initialize fileD as an empty array

  if (files) {
      for (let i = 0; i < files.length; i++) {
          this.formData.fileD.push(files[i]); // Add each file to the array
      }
  }
}

    constructor(private router: Router) { }


  navigateToForm() {
    this.router.navigate(['/dashboard']);
  }



}
