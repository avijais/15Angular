import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTilesComponent } from './parent-tiles.component';

describe('ParentTilesComponent', () => {
  let component: ParentTilesComponent;
  let fixture: ComponentFixture<ParentTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
