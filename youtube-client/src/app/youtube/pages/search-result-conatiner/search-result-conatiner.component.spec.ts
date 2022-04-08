import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultConatinerComponent } from './search-result-conatiner.component';

describe('SearchResultConatinerComponent', () => {
  let component: SearchResultConatinerComponent;
  let fixture: ComponentFixture<SearchResultConatinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchResultConatinerComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultConatinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
