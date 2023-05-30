import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCharacterComponent } from './nav-character.component';

describe('NavCharacterComponent', () => {
  let component: NavCharacterComponent;
  let fixture: ComponentFixture<NavCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
