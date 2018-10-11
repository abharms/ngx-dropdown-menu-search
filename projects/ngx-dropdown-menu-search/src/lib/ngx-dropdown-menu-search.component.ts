import { Component, EventEmitter, Input, OnInit, Output, ElementRef, ViewChild } from '@angular/core';
import { IConfig } from './config.models';

@Component({
    selector: 'ngx-dropdown-menu-search',
    templateUrl: './ngx-dropdown-menu-search.component.html',
    styleUrls: ['./ngx-dropdown-menu-search.component.scss']
})
export class NgxDropdownMenuSearchComponent implements OnInit {

    // @Input() backgroundColor: string;
    @Input() errorVisible: boolean;
    @Input() options: any[];
    @Input() selectedOption: any;
    // @Input() textColor: string;
    @Input() config: IConfig;

    @Output() onDropdownClick: EventEmitter < any > = new EventEmitter < any > ();
    @Output() onOptionSelect: EventEmitter < any > = new EventEmitter < any > ();

    @ViewChild('hiddenSearchInput') hiddenSearchInput: ElementRef;

    public element: any;
    public heightAndLineHeight = {
        'height': this.config ? this.config.height : '20px',
        'line-height': this.config ? this.config.lineHeight : '20px'
    }
    public optionsVisible: boolean;
    public searchTerm: string;


    constructor() {
    }

    ngOnInit() {
        // this.config = {
        //     flow: 'down',
        //     height: '26px',
        //     lineHeight: '26px',
        // }
    }

    public dropdownClick(): void {
        if (!this.config.isDisabled) {
            this.optionsVisible = true;
        }
        this.onDropdownClick.emit();
        //automatically select hidden input so we can quickly find an item
        setTimeout( () => this.hiddenSearchInput.nativeElement.select(), 10); 
    }

    public onInputChange(event, term: string): void {
      let lowerCaseTerm = term.toLocaleLowerCase();
      let foundOption =  this.options.find( (option) => {
            if(option.name) {
              return this.includes(option.name.toLocaleLowerCase(), lowerCaseTerm);  
            }           
        });
      this.scrollToFoundOption(foundOption);     
      this.selectOptionOnEnterClick(event, foundOption);
    }

    public onOptionClick(option: any, name: any): void {
        this.selectedOption = name;
        this.optionsVisible = false;
        this.onOptionSelect.emit(option);
    }

    public autoCloseDropdown(event) {
        if (!event.target.closest(".dropdown")) {
            this.optionsVisible = false;
        }
    }

    private includes(container: any, value: string): boolean {
      if(container) {
        let includesValue: boolean;
        let index: number = container.indexOf(value);
        if(index >= 0) {
            includesValue = true;
        }
        return includesValue;
      }      
    }

    private scrollToFoundOption(foundOption): void {
        if(foundOption) {
            this.element = document.getElementById(foundOption.name);
            this.element.scrollIntoView();          
        }
    }

    private selectOptionOnEnterClick(event, foundOption): void {
        if(event.keyCode === 13) {
            this.optionsVisible = false;
            this.onOptionClick(foundOption, this.element.id);
        }
    }


}
