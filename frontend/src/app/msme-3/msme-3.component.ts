import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-msme-3',
  templateUrl: './msme-3.component.html',
  styleUrl: './msme-3.component.scss'
})
export class Msme3Component {

  formData: any = {
    premQ1: null,
    premQ1Remark: '',
    premQ2: null,
    premQ2Remark: '',
    premQ3: null,
    premQ3Remark: '',

    cargoQ1: null,
    cargoQ1Remark: '',
    cargoQ2: null,
    cargoQ2Remark: '',
    cargoQ3: null,
    cargoQ3Remark: '',

    convQ1: null,
    convQ1Remark: '',
    convQ2: null,
    convQ2Remark: '',
    convQ3: null,
    convQ3Remark: '',

    persQ1: null,
    persQ1Remark: '',
    persQ2: null,
    persQ2Remark: '',
    persQ3: null,
    persQ3Remark: '',

    bpQ1: null,
    bpQ1Remark: '',
    bpQ2: null,
    bpQ2Remark: '',
    bpQ3: null,
    bpQ3Remark: '',

    trainQ1: null,
    trainQ1Remark: '',
    trainQ2: null,
    trainQ2Remark: '',
    trainQ3: null,
    trainQ3Remark: ''
};



    constructor(private router: Router) { }


  navigateToForm() {
    this.router.navigate(['/dashboard']);
  }


}
