import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSize2Component } from './font-size2.component';

describe('FontSize2Component', () => {
  let component: FontSize2Component;
  let fixture: ComponentFixture<FontSize2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FontSize2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontSize2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
