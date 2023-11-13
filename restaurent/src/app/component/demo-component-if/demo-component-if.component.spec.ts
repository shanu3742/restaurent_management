import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentIfComponent } from './demo-component-if.component';

describe('DemoComponentIfComponent', () => {
  let component: DemoComponentIfComponent;
  let fixture: ComponentFixture<DemoComponentIfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoComponentIfComponent]
    });
    fixture = TestBed.createComponent(DemoComponentIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
