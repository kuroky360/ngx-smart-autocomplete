import { NgModule } from '@angular/core';
import { Ng2SmartAutocompleteComponent } from './ng2-smart-autocomplete.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [Ng2SmartAutocompleteComponent],
  exports: [Ng2SmartAutocompleteComponent]
})
export class Ng2SmartAutocompleteModule { }
