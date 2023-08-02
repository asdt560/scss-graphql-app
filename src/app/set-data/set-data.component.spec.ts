import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDataComponent } from './set-data.component';

describe('SetDataComponent', () => {
  let component: SetDataComponent;
  let fixture: ComponentFixture<SetDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetDataComponent]
    });
    fixture = TestBed.createComponent(SetDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
