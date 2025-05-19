import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatAutocompleteModule],
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  searchControl = new FormControl('');
  filteredOptions!: Observable<string[]>;
  allOptions: string[] = [];

  @Output() search = new EventEmitter<string>();

  ngOnInit(): void {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  updateSuggestions(options: string[]) {
    this.allOptions = options;
  }

  onSearch() {
    const term = this.searchControl.value?.trim() || '';
    this.search.emit(term);
  }
}