import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Heroes.ComponentComponent } from './heroes.component.component';

describe('Heroes.ComponentComponent', () => {
  let component: Heroes.ComponentComponent;
  let fixture: ComponentFixture<Heroes.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Heroes.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Heroes.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
