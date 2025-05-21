import { Routes } from '@angular/router';

// USO DE LAZY LOADING
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/product-list/product-list.component')
      .then(m => m.ProductListComponent)
  },
  {
    path: 'producto/:id',
    loadComponent: () => import('./components/product-detail/product-detail.component')
      .then(m => m.ProductDetailComponent)
  },
  {
    path: 'carrito',
    loadComponent: () => import('./components/cart/cart.component')
      .then(m => m.CartComponent)
  }
];