import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotomaniaComponent } from './lotomania.component';

describe('LotomaniaComponent', () => {
  let component: LotomaniaComponent;
  let fixture: ComponentFixture<LotomaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotomaniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LotomaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
