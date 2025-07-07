import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureE1Component } from './annexure-e.1.component';

describe('AnnexureE1Component', () => {
  let component: AnnexureE1Component;
  let fixture: ComponentFixture<AnnexureE1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnexureE1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnexureE1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
