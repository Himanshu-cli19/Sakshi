import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolaComponent } from './gola.component';

describe('GolaComponent', () => {
  let component: GolaComponent;
  let fixture: ComponentFixture<GolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GolaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
