import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lugar } from './lugar';

describe('Lugar', () => {
  let component: Lugar;
  let fixture: ComponentFixture<Lugar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lugar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lugar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
