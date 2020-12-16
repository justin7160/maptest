import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSerachComponent } from './map-serach.component';

describe('MapSerachComponent', () => {
  let component: MapSerachComponent;
  let fixture: ComponentFixture<MapSerachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapSerachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
