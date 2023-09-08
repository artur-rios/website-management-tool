import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCreationComponent } from './site-creation.component';

describe('SiteCreationComponent', () => {
  let component: SiteCreationComponent;
  let fixture: ComponentFixture<SiteCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteCreationComponent]
    });
    fixture = TestBed.createComponent(SiteCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
