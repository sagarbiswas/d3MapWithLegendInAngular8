import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiltMapComponent } from './tilt-map.component';

describe('TiltMapComponent', () => {
  let component: TiltMapComponent;
  let fixture: ComponentFixture<TiltMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiltMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiltMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
