import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondpageComponent } from './secondpage.component';

describe('SecondpageComponent', () => {
  let component: SecondpageComponent;
  let fixture: ComponentFixture<SecondpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondpageComponent]
    });
    fixture = TestBed.createComponent(SecondpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
