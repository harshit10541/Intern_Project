import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureDComponent } from './annexure-d.component';

describe('AnnexureDComponent', () => {
  let component: AnnexureDComponent;
  let fixture: ComponentFixture<AnnexureDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnexureDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnexureDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
