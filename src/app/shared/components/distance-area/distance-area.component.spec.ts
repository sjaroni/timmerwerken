import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceAreaComponent } from './distance-area.component';

describe('DistanceAreaComponent', () => {
  let component: DistanceAreaComponent;
  let fixture: ComponentFixture<DistanceAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistanceAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistanceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
