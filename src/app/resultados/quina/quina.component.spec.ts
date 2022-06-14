import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinaComponent } from './quina.component';

describe('QuinaComponent', () => {
  let component: QuinaComponent;
  let fixture: ComponentFixture<QuinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
