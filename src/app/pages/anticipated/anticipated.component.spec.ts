import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnticipatedComponent } from './anticipated.component';

describe('AnticipatedComponent', () => {
  let component: AnticipatedComponent;
  let fixture: ComponentFixture<AnticipatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnticipatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnticipatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
