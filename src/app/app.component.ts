import { Component, OnInit } from '@angular/core';
import { NgxDropdownMenuSearchComponent } from 'ngx-dropdown-menu-search';
import { IConfig } from 'projects/ngx-dropdown-menu-search/src/lib/config.models';

@Component({
  selector: 'dm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	public config: IConfig;

	ngOnInit() {
		// this.config = {
		// 	height: '30px',
		// 	lineHeight: '30px'
		// }
	}

}
