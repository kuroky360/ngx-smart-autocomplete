import { NgModule } from '@angular/core';
import { NgxSmartAutocompleteComponent } from './ngx-smart-autocomplete.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NgxSmartAutocompleteComponent],
  exports: [NgxSmartAutocompleteComponent]
})
export class NgxSmartAutocompleteModule { }
