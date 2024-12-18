import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HimanshuComponent } from './himanshu.component';

describe('HimanshuComponent', () => {
  let component: HimanshuComponent;
  let fixture: ComponentFixture<HimanshuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HimanshuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HimanshuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
