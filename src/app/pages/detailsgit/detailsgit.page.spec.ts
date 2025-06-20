import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsgitPage } from './detailsgit.page';

describe('DetailsgitPage', () => {
  let component: DetailsgitPage;
  let fixture: ComponentFixture<DetailsgitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsgitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
