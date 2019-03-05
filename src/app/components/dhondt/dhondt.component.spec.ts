import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DHondtComponent } from './dhondt.component';

describe('DHondtComponent', () => {
  let component: DHondtComponent;
  let fixture: ComponentFixture<DHondtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DHondtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DHondtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
