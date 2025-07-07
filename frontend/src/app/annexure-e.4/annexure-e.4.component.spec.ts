import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureE4Component } from './annexure-e.4.component';

describe('AnnexureE4Component', () => {
  let component: AnnexureE4Component;
  let fixture: ComponentFixture<AnnexureE4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnexureE4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnexureE4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
