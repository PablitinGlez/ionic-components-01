import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChecboxPage } from './checbox.page';

describe('ChecboxPage', () => {
  let component: ChecboxPage;
  let fixture: ComponentFixture<ChecboxPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
