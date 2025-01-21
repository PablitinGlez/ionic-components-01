import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcordionPage } from './acordion.page';

describe('AcordionPage', () => {
  let component: AcordionPage;
  let fixture: ComponentFixture<AcordionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AcordionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
