import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annexure-e.2',
  templateUrl: './annexure-e.2.component.html',
  styleUrl: './annexure-e.2.component.scss'
})
export class AnnexureE2Component {
  formDataE2: any = {
    a: null,
    b: null,
    c: null,
    remarksA: '',
    remarksB: '',
    remarksC: '',
    remarksD: '',
    remarksE: ''
  };

  onFileESelected(event: any) {
    const files: FileList = event.target.files; // Get the selected files as a FileList
    this.formDataE2.fileE = []; // Initialize fileE as an empty array

    if (files) {
        for (let i = 0; i < files.length; i++) {
            this.formDataE2.fileE.push(files[i]); // Add each file to the array
        }
    }
}

onFileBSelected(event: any) {
  const files: FileList = event.target.files; // Get the selected files as a FileList
  this.formDataE2.fileB = []; // Initialize fileB as an empty array

  if (files) {
      for (let i = 0; i < files.length; i++) {
          this.formDataE2.fileB.push(files[i]); // Add each file to the array
      }
  }
}


    constructor(private router: Router) { }


  navigateToForm() {
    this.router.navigate(['/dashboard']);
  }

}
