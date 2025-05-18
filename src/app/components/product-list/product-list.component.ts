import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [
      
    CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatCardModule,
      MatInputModule,
      MatAutocompleteModule,
      ProductCardComponent
    ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  searchControl = new FormControl('');
  filteredOptions!: Observable<string[]>;
  allOptions: string[] = []; 


  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}


  ngOnInit(): void {
  this.products = this.productService.getProducts();
  this.filteredProducts = this.products;

  const categories = this.products.map(p => p.category || '')
  const names = this.products.map(p => p.name);
  ;
  this.allOptions = Array.from(new Set([...categories, ...names, ]));

  this.filteredOptions = this.searchControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value || ''))
  );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allOptions.filter(option => option.toLowerCase().includes(filterValue));
  }
    
  addToCart(product: Product) {
    console.log('Agregado al carrito:', product);
    this.cartService.addToCart(product);
  }

  showCart() {
    console.log('Contenido del carrito:', this.cartService.getCart());
  }

  onSearch(): void {
  const term = (this.searchControl.value || '').toLowerCase().trim();
  if (term) {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(term) ||
      (product.category && product.category.toLowerCase().includes(term))
    );
  } else {
    this.filteredProducts = this.products;
  }
  }
}

