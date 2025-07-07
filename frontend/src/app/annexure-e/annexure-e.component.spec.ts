import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureEComponent } from './annexure-e.component';

describe('AnnexureEComponent', () => {
  let component: AnnexureEComponent;
  let fixture: ComponentFixture<AnnexureEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnexureEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnexureEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
