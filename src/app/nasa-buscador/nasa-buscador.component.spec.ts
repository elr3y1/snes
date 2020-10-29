import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaBuscadorComponent } from './nasa-buscador.component';

describe('NasaBuscadorComponent', () => {
  let component: NasaBuscadorComponent;
  let fixture: ComponentFixture<NasaBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaBuscadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
