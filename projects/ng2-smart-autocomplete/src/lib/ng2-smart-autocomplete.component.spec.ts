import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2SmartAutocompleteComponent } from './ng2-smart-autocomplete.component';

describe('Ng2SmartAutocompleteComponent', () => {
  let component: Ng2SmartAutocompleteComponent;
  let fixture: ComponentFixture<Ng2SmartAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2SmartAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2SmartAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
