import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UgProgramsComponent } from './ug-programs.component';

describe('UgProgramsComponent', () => {
  let component: UgProgramsComponent;
  let fixture: ComponentFixture<UgProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UgProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
