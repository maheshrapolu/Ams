import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddempolyeeComponent } from './addempolyee.component';

describe('AddempolyeeComponent', () => {
  let component: AddempolyeeComponent;
  let fixture: ComponentFixture<AddempolyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddempolyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddempolyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
