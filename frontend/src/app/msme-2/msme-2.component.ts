import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-msme-2',
  templateUrl: './msme-2.component.html',
  styleUrl: './msme-2.component.scss'
})
export class Msme2Component {

  formData: any = {
    q1: null,
    q1Remark: '',
    q2: null,
    q2Remark: '',
    q3Remark: '',
    q4iRemark: '',
    q4iiRemark: '',
    q4iiiRemark: '',
    q5Remark: '',
    q6Remark: '',
    q7Remark: '',
    q8Remark: '',
    q9Remark: '',
    q10Remark: ''
};

onFileQ1Selected(event: any) { this.formData.q1Files = this.handleFileUpload(event); }
onFileQ2Selected(event: any) { this.formData.q2Files = this.handleFileUpload(event); }
onFileQ3Selected(event: any) { this.formData.q3Files = this.handleFileUpload(event); }
onFileQ4iSelected(event: any) { this.formData.q4iFiles = this.handleFileUpload(event); }
onFileQ4iiSelected(event: any) { this.formData.q4iiFiles = this.handleFileUpload(event); }
onFileQ4iiiSelected(event: any) { this.formData.q4iiiFiles = this.handleFileUpload(event); }
onFileQ5Selected(event: any) { this.formData.q5Files = this.handleFileUpload(event); }
onFileQ6Selected(event: any) { this.formData.q6Files = this.handleFileUpload(event); }
onFileQ7Selected(event: any) { this.formData.q7Files = this.handleFileUpload(event); }
onFileQ8Selected(event: any) { this.formData.q8Files = this.handleFileUpload(event); }
onFileQ9Selected(event: any) { this.formData.q9Files = this.handleFileUpload(event); }
onFileQ10Selected(event: any) { this.formData.q10Files = this.handleFileUpload(event); }

handleFileUpload(event: any): File[] {
    const files: FileList = event.target.files;
    const fileArray: File[] = [];
    if (files) {
        for (let i = 0; i < files.length; i++) {
            fileArray.push(files[i]);
        }
    }
    return fileArray;
}


    constructor(private router: Router) { }


  navigateToForm() {
    this.router.navigate(['/dashboard']);
  }

}
