import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Msme3Component } from './msme-3.component';

describe('Msme3Component', () => {
  let component: Msme3Component;
  let fixture: ComponentFixture<Msme3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Msme3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Msme3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
