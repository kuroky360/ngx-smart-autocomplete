# Ng2-Smart-AutoComplete

[![npm](https://img.shields.io/npm/dt/ng2-smart-autocomplete.svg)](https://www.npmjs.com/package/ng2-smart-autocomplete)  [![npm](https://img.shields.io/npm/v/ng2-smart-autocomplete.svg)](https://www.npmjs.com/package/ng2-smart-autocomplete) [![NpmLicense](https://img.shields.io/npm/l/ng2-smart-autocomplete.svg)](https://www.npmjs.com/package/ng2-smart-autocomplete)


## What is ng2-smart-autocomplete?
   ng2-smart-autocomplete is a Angular Library which allows the visitor to select an item from a Real-time pull dropdown list when typing something into an input field. Similar to the autocomplete, typeahead and tags input plugins.

## Features
  * Lightweight
  * Tag input
  * Keyboard shortcuts
  * Dynamic drop-down lists 

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
  
    <smart-autocomplete [displayData]="myDisplayData" [fetchData]="myFetchData" (fetchMethod)="myFetchMethod($event)"></smart-autocomplete>

## Attributes

 * **`displayData`**, array, required. Used to save the currently selected data list. Expect such a data format  [ {id:'xx',name:'xx'},... ]
 * **`fetchData`**, array, required. Data source array,used to save the current real-time pull data list. Expect such a data format [ {id:'xx',name:'xx'},... ]
 * **`en`**, boolean, optional. If true, the English template is used, otherwise the Chinese template is used, the default is false
 * **`fetchMethod`**, fn, required. Real-time data pull method, receiving a keyword parameter（$event）(It should be noted that **`fetchData`** should be updated after the data is obtained)
                        
## For Developers

  ```sh
  $ git clone https://github.com/kuroky360/ng2-smart-autocomplete.git
  $ cd ng2-smart-autocomplete
  $ npm install
  $ npm start
  ```
### List of available npm tasks

   * `npm run package` : build and package project
