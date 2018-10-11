# NgxDropdownMenuSearch

A simple Angular 6 dropdown menu with search.

##Quick Start

	npm install ngx-dropdown-menu-search --save


##Simple Example

	// app.module.ts
	import { NgModule } from '@angular/core';
	import { BrowserModule } from '@angular/platform-browser';
	import { NgxDropdownMenuSearchModule } from 'ngx-pagination'; // <-- import the module
	import { MyComponent } from './my.component';

	@NgModule({
	    imports: [ BrowserModule, NgxDropdownMenuSearchModule ], // <-- include it in your app module
	    declarations: [ MyComponent ],
	    bootstrap: [ MyComponent ]
	})
	export class MyAppModule {}


	// my.component.ts
	import { Component } from '@angular/core';

	@Component({
	    selector: 'my-component',
	    template: `
	    <div style="width: 300px">
	      <ngx-dropdown-menu-search></ngx-dropdown-menu-search>
	    </div>	               
	    `
	})
	export class MyComponent {

	}
