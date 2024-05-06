import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationShellComponent } from './organization-shell.component';

describe('OrganizationShellComponent', () => {
  let component: OrganizationShellComponent;
  let fixture: ComponentFixture<OrganizationShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
