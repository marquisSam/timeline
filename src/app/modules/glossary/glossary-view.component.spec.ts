import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossaryViewComponent } from './glossary-view.component';

describe('GlossaryViewComponent', () => {
  let component: GlossaryViewComponent;
  let fixture: ComponentFixture<GlossaryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlossaryViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlossaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
