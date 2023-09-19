import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWhiteLayoutComponent } from './main-white-layout.component';

describe('MainWhiteLayoutComponent', () => {
  let component: MainWhiteLayoutComponent;
  let fixture: ComponentFixture<MainWhiteLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWhiteLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainWhiteLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
