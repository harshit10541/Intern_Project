import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Msme1Component } from './msme-1.component';

describe('Msme1Component', () => {
  let component: Msme1Component;
  let fixture: ComponentFixture<Msme1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Msme1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Msme1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
