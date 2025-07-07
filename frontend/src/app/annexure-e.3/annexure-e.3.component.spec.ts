import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureE3Component } from './annexure-e.3.component';

describe('AnnexureE3Component', () => {
  let component: AnnexureE3Component;
  let fixture: ComponentFixture<AnnexureE3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnexureE3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnexureE3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
