# NgxDropdownMenuSearch

A simple Angular 6 dropdown menu with search.

## Quick Start

	npm install ngx-dropdown-menu-search --save


## Simple Example

```ts
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropdownMenuSearchModule } from 'ngx-dropdown-menu-search'; // <-- import the module
import { MyComponent } from './my.component';

@NgModule({
    imports: [ BrowserModule, NgxDropdownMenuSearchModule ], // <-- include it in your app module
    declarations: [ MyComponent ],
    bootstrap: [ MyComponent ]
})
export class MyAppModule {}
```


```ts
// my.component.ts
import { Component, OnInit } from '@angular/core';

import { IConfig } from 'ngx-dropdown-menu-search';

type NameAndId = {name: string, id: number};

@Component({
    selector: 'my-component',
    template: `
    <div style="width: 300px">
      <ngx-dropdown-menu-search
                        [config]="config"
                        [options]="options"
                        [selectedOption]="selectedOption"
                        (onOptionSelect)="onDropdownOptionSelect($event)">
      </ngx-dropdown-menu-search>
    </div>	               
    `
})
export class MyComponent {

    public config: IConfig;
    public options: any[];
    public selectedOption: any;

    constructor() {}

    ngOnInit() {
        //initialize your config object, all properties are optional
        this.config = {
            height: '30px',
            lineHeignt: '30px',
            searchEnabled: true
        }

        //an array of objects, requires a name property
        this.options = [
                    {
                        name: 'Option1',
                        id: 1
                    },
                    {
                        name: 'Option2',
                        id: 2
                    }
        ]

        //pass a pre-defined selected option to the dropdown (optional)
        this.selectedOption = 'my selected option';
    }

    public onDropdownOptionSelect(option: NameAndId): void {
        this.selectedOption = option;
    }

}
```

## Config

Customization for the dropdown-menu can be achieved via the config object. Available properties are as follows:

```ts
config = {
    flow: string, // 'down' is set by default, set to 'up' if desired
    height: string, //set height of dropdown label
    lineHeight: string, //set line height of dropdown label
    isDisabled: boolean, //disables dropdown menu if true
    searchEnabled: boolean, //if true, search input is available, filters results
    scrollbarVisible: boolean //scrollbar appears to the right if true
}
```

## Styling

Custom styling can be achieved by simply overriding the default styles. To overcome Angular's view encapsulation, you may need to use the /deep/ operator to target it (depending on the type of encapsulation your component is using).

To avoid specificity issues, just add your own custom class name to the element, which will allow your styles to override the defaults:

```css
.my-dropdown /deep/ .dropdown {
    color: blue;
}
```

```html
<ngx-dropdown-menu-search class="my-dropdown"></ngx-dropdown-menu-search>
```

