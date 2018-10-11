import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
	name: 'searchFilter',
	pure: false
})



export class SearchFilterPipe implements PipeTransform {

	constructor() {}

	//take in any data array, filter it against user input (term)
	transform(items: any, term: any): any {

	    if (term === undefined) return items;

	    let filteredItems =  items.filter((item) => {

	      for(let property in item){

					if (property === "ItemContent"){
						// (item.ItemContent.Title + item.ItemContent.Body).toString().toLowerCase().includes(term.toLowerCase());						
						return this.includes((item.ItemContent.Title + item.ItemContent.Body).toString().toLowerCase(), term.toLowerCase());
					}
	        if (item[property] === (null || undefined)){
	          continue;
	        }
	        if(item[property]) {
	        	// item[property].toString().toLowerCase().includes(term.toLowerCase())	        	
	        	if(this.includes(item[property].toString().toLowerCase(), term.toLowerCase())) {
	        	  return true;
	        	}
	        }
	      }
	      return false;
	    });	    
	    return filteredItems;
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

}

