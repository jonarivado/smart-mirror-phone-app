import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbbComponent } from './sbb.component';

describe('SbbComponent', () => {
  let component: SbbComponent;
  let fixture: ComponentFixture<SbbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
