import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SameFolderCompComponent } from './same-folder-comp.component';

describe('SameFolderCompComponent', () => {
  let component: SameFolderCompComponent;
  let fixture: ComponentFixture<SameFolderCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SameFolderCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SameFolderCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
