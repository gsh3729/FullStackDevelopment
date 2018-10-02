import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicFacilitiesComponent } from './academic-facilities.component';

describe('AcademicFacilitiesComponent', () => {
  let component: AcademicFacilitiesComponent;
  let fixture: ComponentFixture<AcademicFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
