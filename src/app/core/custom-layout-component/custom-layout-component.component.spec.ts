import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLayoutComponentComponent } from './custom-layout-component.component';

describe('CustomLayoutComponentComponent', () => {
  let component: CustomLayoutComponentComponent;
  let fixture: ComponentFixture<CustomLayoutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomLayoutComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
