import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidenavbarComponent } from './slidenavbar.component';

describe('SlidenavbarComponent', () => {
  let component: SlidenavbarComponent;
  let fixture: ComponentFixture<SlidenavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidenavbarComponent]
    });
    fixture = TestBed.createComponent(SlidenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
