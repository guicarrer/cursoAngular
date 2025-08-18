import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaPaggina } from './minha-paggina';

describe('MinhaPaggina', () => {
  let component: MinhaPaggina;
  let fixture: ComponentFixture<MinhaPaggina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhaPaggina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhaPaggina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
