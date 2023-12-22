import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdpageComponent } from './thirdpage.component';

describe('ThirdpageComponent', () => {
  let component: ThirdpageComponent;
  let fixture: ComponentFixture<ThirdpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdpageComponent]
    });
    fixture = TestBed.createComponent(ThirdpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
