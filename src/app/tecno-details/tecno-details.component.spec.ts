import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnoDetailsComponent } from './tecno-details.component';

describe('TecnoDetailsComponent', () => {
  let component: TecnoDetailsComponent;
  let fixture: ComponentFixture<TecnoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
