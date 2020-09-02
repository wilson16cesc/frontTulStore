import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBuyComponent } from './container-buy.component';

describe('ContainerBuyComponent', () => {
  let component: ContainerBuyComponent;
  let fixture: ComponentFixture<ContainerBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
