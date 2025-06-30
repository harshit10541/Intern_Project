import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sticky-button',
  templateUrl: './sticky-button.component.html',
  styleUrl: './sticky-button.component.scss'
})
export class StickyButtonComponent {
  @Input() saveAsDraftDisabled: boolean = false;
  @Input() submitDisabled: boolean = false;

  @Output() saveAsDraft = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();

  onSaveAsDraft(): void {
    this.saveAsDraft.emit();
  }

  onSubmit(): void {
    this.submit.emit();
  }
}
