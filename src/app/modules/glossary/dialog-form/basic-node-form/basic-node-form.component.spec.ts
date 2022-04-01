import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicNodeFormComponent } from './basic-node-form.component';

describe('BasicNodeFormComponent', () => {
  let component: BasicNodeFormComponent;
  let fixture: ComponentFixture<BasicNodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicNodeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicNodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
