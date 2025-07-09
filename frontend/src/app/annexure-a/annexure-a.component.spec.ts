import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureAComponent } from './annexure-a.component';

describe('AnnexureAComponent', () => {
  let component: AnnexureAComponent;
  let fixture: ComponentFixture<AnnexureAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnexureAComponent]
    })

    .compileComponents();


    fixture = TestBed.createComponent(AnnexureAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
