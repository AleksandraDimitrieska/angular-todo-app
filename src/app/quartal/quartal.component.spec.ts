import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartalComponent } from './quartal.component';

describe('QuartalComponent', () => {
  let component: QuartalComponent;
  let fixture: ComponentFixture<QuartalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
