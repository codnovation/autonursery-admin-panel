import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesSectionsComponent } from './classes-sections.component';

describe('ClassesSectionsComponent', () => {
  let component: ClassesSectionsComponent;
  let fixture: ComponentFixture<ClassesSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
