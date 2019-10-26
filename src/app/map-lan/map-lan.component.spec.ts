import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLanComponent } from './map-lan.component';

describe('MapLanComponent', () => {
  let component: MapLanComponent;
  let fixture: ComponentFixture<MapLanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapLanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
