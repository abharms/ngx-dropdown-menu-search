import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxDropdownMenuSearchComponent } from './ngx-dropdown-menu-search.component';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  imports: [
  		CommonModule,
  		FormsModule
  ],
  declarations: [NgxDropdownMenuSearchComponent, SearchFilterPipe],
  exports: [NgxDropdownMenuSearchComponent, SearchFilterPipe]
})
export class NgxDropdownMenuSearchModule { }
