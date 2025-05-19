import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ProductFilterService } from '../../services/product-filter.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    ProductSearchComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  @ViewChild(ProductSearchComponent) searchComponent!: ProductSearchComponent;

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private filterService: ProductFilterService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = [...this.products];
  }

  ngAfterViewInit(): void {
    const options = this.filterService.getSuggestions(this.products);
    this.searchComponent.updateSuggestions(options);
  }

  onSearch(term: string) {
    this.filteredProducts = this.filterService.filter(this.products, term);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}