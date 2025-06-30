import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Msme2Component } from './msme-2.component';

describe('Msme2Component', () => {
  let component: Msme2Component;
  let fixture: ComponentFixture<Msme2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Msme2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Msme2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
