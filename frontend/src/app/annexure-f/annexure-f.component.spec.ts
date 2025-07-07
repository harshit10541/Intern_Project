import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureFComponent } from './annexure-f.component';

describe('AnnexureFComponent', () => {
  let component: AnnexureFComponent;
  let fixture: ComponentFixture<AnnexureFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnexureFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnexureFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
