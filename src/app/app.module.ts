import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxDropdownMenuSearchModule } from 'ngx-dropdown-menu-search';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDropdownMenuSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
