import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartAutocompleteComponent } from './ngx-smart-autocomplete.component';

describe('NgxSmartAutocompleteComponent', () => {
  let component: NgxSmartAutocompleteComponent;
  let fixture: ComponentFixture<NgxSmartAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSmartAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSmartAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
