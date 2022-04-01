import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossaryCollectionTableComponent } from './glossary-collection-table.component';

describe('GlossaryCollectionTableComponent', () => {
  let component: GlossaryCollectionTableComponent;
  let fixture: ComponentFixture<GlossaryCollectionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlossaryCollectionTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlossaryCollectionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
