import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureE2Component } from './annexure-e.2.component';

describe('AnnexureE2Component', () => {
  let component: AnnexureE2Component;
  let fixture: ComponentFixture<AnnexureE2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnexureE2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnexureE2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
