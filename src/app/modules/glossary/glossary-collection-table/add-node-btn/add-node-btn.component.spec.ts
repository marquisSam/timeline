import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNodeBtnComponent } from './add-node-btn.component';

describe('AddNodeBtnComponent', () => {
  let component: AddNodeBtnComponent;
  let fixture: ComponentFixture<AddNodeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNodeBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNodeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
