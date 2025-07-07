import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Attachment {
  progress: number;
  title: string;
  name: string;
  description: string;
  route: string;
  id: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedItem: string = ''; // You might still use this, but it's not directly related to the radio buttons
  visibleAttachmentIds: string[] = [];
  selectedValue: string | null = null;  // Allow null for no selection
  selectedOptions: { [key: string]: boolean } = {  // Used for visual state of radio buttons
    T1: false,
    T2: false,
    T3: false,
    LO: false,
    MSME: false,
  };
  allAttachmentIds: string[] = [];

  optionAttachmentMap: { [key: string]: string[] } = {
    'T1': ['annexureA', 'annexureC', 'annexureD', 'annexureE.1', 'annexureE.2', 'annexureE.3', 'annexureE.4'],
    'T2': ['annexureA', 'annexureB', 'annexureC', 'annexureD', 'annexureE.1', 'annexureE.2', 'annexureE.3', 'annexureE.4', 'annexureE.5'],
    'T3': ['annexureA', 'annexureB', 'annexureC', 'annexureD', 'annexureE.1', 'annexureE.2', 'annexureE.3', 'annexureE.4', 'annexureE.5', 'annexureF'],
    'LO': ['annexureA', 'annexureB', 'annexureC', 'annexureD', 'annexureE.1', 'annexureE.2', 'annexureE.3', 'annexureE.4', 'annexureE.5'],
    'MSME': ['msme1', 'msme2', 'msme3'],
  };
  radius = 17;

  attachments: Attachment[] = [
    { id: 'annexureA', title: '1', name: 'Annexure A ', description: 'APPLICATION FORM FOR GRANT OF AEO STATUS', route: '/annexure-a', progress: 10 },
    { id: 'annexureB', title: '2', name: 'Annexure B ', description: 'SECURITY PLAN', route: '/annexure-b', progress: 15 },
    { id: 'annexureC', title: '3', name: 'Annexure C ', description: 'PROCESS MAP', route: '/annexure-c', progress: 0 },
    { id: 'annexureD', title: '4', name: 'Annexure D ', description: 'SITE PLAN', route: '/annexure-d', progress: 12 },
    { id: 'annexureE.1', title: '5', name: 'Annexure E.1 ', description: 'General Compliance ', route: '/annexure-e.1', progress: 0 },
    { id: 'annexureE.2', title: '6', name: 'Annexure E.2 ', description: 'Legal Compliance ', route: '/annexure-e.2', progress: 0 },
    { id: 'annexureE.3', title: '7', name: 'Annexure E.3 ', description: ' Managing commercial and (where appropriate) transport records ', route: '/annexure-e.3', progress: 0 },
    { id: 'annexureE.4', title: '8', name: 'Annexure E.4 ', description: 'Financial Solvency ', route: '/annexure-e.4', progress: 0 },
    { id: 'annexureE.5', title: '9', name: 'Annexure E.5 ', description: 'Safety and Security', route: '/annexure-e.5', progress: 0 },
    { id: 'annexureF', title: '10', name: 'Annexure F ', description: 'Business Partner Details ', route: '/annexure-f', progress: 0 },
    { id: 'msme1', title: '1', name: 'MSME - 1 ', description: 'APPLICATION FORM FOR GRANT OF AEO T1 & T2 STATUS (for MSMEs)', route: '/msme-1', progress: 0 },
    { id: 'msme2', title: '2', name: 'MSME - 2', description: 'Legal, Managing Commercial Records, and Financial Solvency Compliance', route: '/msme-2', progress: 0 },
    { id: 'msme3', title: '3', name: 'MSME - 3', description: 'Safety and Security Requirements', route: '/msme-3', progress: 0 },
  ];

  getCircumference(): number {
    return 2 * Math.PI * 40;
  }

  getStrokeDashoffset(progress: number): number {
    const circumference = this.getCircumference();
    return circumference - (progress / 100) * circumference;
  }

  ngOnInit() {
    this.allAttachmentIds = this.attachments.map(attachment => attachment.id);
    // No initial selection, so don't call selectOption here
  }

  constructor(private router: Router) { }

  updateVisibleAttachments() {
    this.visibleAttachmentIds = [];

    if (this.selectedValue && this.optionAttachmentMap[this.selectedValue]) {
      this.visibleAttachmentIds = this.optionAttachmentMap[this.selectedValue];
    }
    // No need for a Set, optionAttachmentMap values should be unique
  }

  isVisible(attachmentId: string): boolean {
    return this.visibleAttachmentIds.includes(attachmentId);
  }

  navigateToForm(route: string) {
    this.router.navigate([route]);
  }

  selectOption(option: string) {
    // Set the selectedValue (allow null for deselection)
    this.selectedValue = option;

    // Update selectedOptions for the visual state
    Object.keys(this.selectedOptions).forEach(key => {
      this.selectedOptions[key] = (key === option); // Only true if it's the selected option
    });

    // Update the visible attachments
    this.updateVisibleAttachments();
  }
}
