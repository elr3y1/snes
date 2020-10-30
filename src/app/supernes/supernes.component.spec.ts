import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupernesComponent } from './supernes.component';

describe('SupernesComponent', () => {
  let component: SupernesComponent;
  let fixture: ComponentFixture<SupernesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupernesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupernesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
