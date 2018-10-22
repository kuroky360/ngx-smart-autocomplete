# ng2-smart-autocomplete

 ng2-smart-autocomplete is a Angular Library which allows the visitor to select an item from a Real-time pull dropdown list when typing something into an input field. Similar to the autocomplete, typeahead and tags input plugins.

## Install

```sh
 $ npm install ng2-smart-autocomplete --save
```

## Usage
  
  1、import Ng2SmartAutocompleteModule to your AppModule
  
  ```sh
   import { Ng2SmartAutocompleteModule } from 'ng2-smart-autocomplete';
   
   @NgModule({
     declarations: [
       AppComponent
     ],
     imports: [
       BrowserModule,
       Ng2SmartAutocompleteModule
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
  ```  
  
  2、use it in your template
  
    <smart-autocomplete [displayData]="myDisplayData" [fetchData]="myPullData" (fetchMethod)="myFetchMethod($event)"></smart-autocomplete>
