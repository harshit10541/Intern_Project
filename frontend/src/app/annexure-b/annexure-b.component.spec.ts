import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureBComponent } from './annexure-b.component';

describe('AnnexureBComponent', () => {
  let component: AnnexureBComponent;
  let fixture: ComponentFixture<AnnexureBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnexureBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnexureBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
