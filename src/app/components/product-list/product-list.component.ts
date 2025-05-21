import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ProductFilterService } from '../../services/product-filter.service';
import { Product } from '../../models/product.model';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

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
  errorMessage: string = '';
  loading: boolean = false;


  // Paginación
  currentPage = 1;
  limit = 5;
  totalProducts = 0;
  totalPages = 0;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private filterService: ProductFilterService
  ) {}


//Cuando el componente se monte, se cargue la lista de productos desde la API.
  ngOnInit(): void {
    this.loadProducts();
  }

  ngAfterViewInit(): void {
    // Aquí podríamos actualizar la búsqueda/autocompletado si fuera necesario.
    // Se actualizarán después de cargar productos
  }


/// Uso del serivico para conseguir productos con manejo de errores
  loadProducts() {
    this.loading = true;
    this.errorMessage = '';
    this.productService.getProducts(this.currentPage, this.limit)
      .pipe(
        catchError(err => {
          this.errorMessage = err.message;
          return of({ products: [], total: 0 });
        }),
        finalize(() => this.loading = false)
      )
      .subscribe(resp => {
        this.products = resp.products;
        this.filteredProducts = [...this.products];
        this.totalProducts = resp.total;
        this.totalPages = Math.ceil(this.totalProducts / this.limit);
        // Actualizar sugerencias en búsqueda
        const options = this.filterService.getSuggestions(this.products);
        this.searchComponent?.updateSuggestions(options);
      });
  }

  /////// Buscador por nombre o categoria

  onSearch(term: string) {
    this.filteredProducts = this.filterService.filter(this.products, term);
  }

 /// Uso del servicio para agregar cosas al carro
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }



  /////// Control paginación
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadProducts();
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProducts();
    }
  }
}