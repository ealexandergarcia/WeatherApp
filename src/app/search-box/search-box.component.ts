import { Component, Output, EventEmitter} from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @Output() searchValue: EventEmitter<string> = new EventEmitter();

  searchForm = new FormGroup({
    search: new FormControl("", [Validators.pattern("[a-zA-Z]*")]) // permitiremos únicamente letras
  });

  get f() {
    return this.searchForm.controls; //Obtenemos los controles creados en el formulario reactivo
  }

  getSearch() {
    const searchValue = this.searchForm.value.search;
    if (searchValue !== null && searchValue !== undefined) {
      this.searchValue.emit(searchValue);
      // console.log(searchValue);
    }
  }
  

  onEnter(evt: any) {
    evt.preventDefault();
    const searchValue = evt.target.value;
    // console.log(searchValue);
    this.searchValue.emit(searchValue);
  }  
}
