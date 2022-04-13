import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardFormComponent } from './create-card-page.component';

describe('CreateCardFormComponent', () => {
  let component: CreateCardFormComponent;
  let fixture: ComponentFixture<CreateCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCardFormComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
