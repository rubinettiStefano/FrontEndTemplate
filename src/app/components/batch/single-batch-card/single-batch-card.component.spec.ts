import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBatchCardComponent } from './single-batch-card.component';

describe('SingleBatchCardComponent', () => {
  let component: SingleBatchCardComponent;
  let fixture: ComponentFixture<SingleBatchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleBatchCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBatchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
