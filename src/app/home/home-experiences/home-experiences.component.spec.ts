import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExperiencesComponent } from './home-experiences.component';

describe('HomeExperiencesComponent', () => {
  let component: HomeExperiencesComponent;
  let fixture: ComponentFixture<HomeExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeExperiencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
