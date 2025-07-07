import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureE5Component } from './annexure-e.5.component';

describe('AnnexureE5Component', () => {
  let component: AnnexureE5Component;
  let fixture: ComponentFixture<AnnexureE5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnexureE5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnexureE5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
