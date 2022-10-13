import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CummunityComponent } from './cummunity.component';

describe('CummunityComponent', () => {
  let component: CummunityComponent;
  let fixture: ComponentFixture<CummunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CummunityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CummunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
