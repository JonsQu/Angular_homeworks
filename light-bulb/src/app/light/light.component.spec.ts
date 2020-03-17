import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightComponent } from './light.component';

describe('LightComponentComponent', () => {
  let component: LightComponent;
  let fixture: ComponentFixture<LightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
