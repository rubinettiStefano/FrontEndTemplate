import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreazioneBatchComponent } from './form-creazione-batch.component';

describe('FormCreazioneBatchComponent', () => {
  let component: FormCreazioneBatchComponent;
  let fixture: ComponentFixture<FormCreazioneBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreazioneBatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreazioneBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
