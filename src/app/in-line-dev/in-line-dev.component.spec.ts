import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InLineDevComponent } from './in-line-dev.component';

describe('InLineDevComponent', () => {
  let component: InLineDevComponent;
  let fixture: ComponentFixture<InLineDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InLineDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InLineDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
