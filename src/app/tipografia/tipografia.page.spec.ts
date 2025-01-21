import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipografiaPage } from './tipografia.page';

describe('TipografiaPage', () => {
  let component: TipografiaPage;
  let fixture: ComponentFixture<TipografiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TipografiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
