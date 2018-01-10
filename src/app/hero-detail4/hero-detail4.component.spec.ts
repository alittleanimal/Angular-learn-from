import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetail4Component } from './hero-detail4.component';

describe('HeroDetail4Component', () => {
  let component: HeroDetail4Component;
  let fixture: ComponentFixture<HeroDetail4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetail4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetail4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
