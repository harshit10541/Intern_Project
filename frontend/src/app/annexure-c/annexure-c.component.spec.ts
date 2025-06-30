import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureCComponent } from './annexure-c.component';

describe('AnnexureCComponent', () => {
  let component: AnnexureCComponent;
  let fixture: ComponentFixture<AnnexureCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnexureCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnexureCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
