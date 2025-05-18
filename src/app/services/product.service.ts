import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Roberto', price: 100, imageUrl: 'assets/pug1.png' ,category: 'Pug Negro' },
    { id: 2, name: 'Pugberto', price: 200, imageUrl: 'assets/pug2.png' ,category: 'Pug Clasico'},
    { id: 3, name: 'Tilin', price: 300, imageUrl: 'assets/pug3.png' ,category: 'Pug Clasico'},
    { id: 4, name: 'Pepe', price: 100, imageUrl: 'assets/pug4.png' ,category: 'Pug Clasico'},
    { id: 5, name: 'Pedro', price: 200, imageUrl: 'assets/pug5.png' ,category: 'Pug Clasico'},
    { id: 6, name: 'Muñeca', price: 100, imageUrl: 'assets/pug6.png' ,category: 'Pug Clasico'},
    { id: 7, name: 'Memo', price: 150, imageUrl: 'assets/pug7.png' ,category: 'Pug Clasico'},
    { id: 8, name: 'Goldo', price: 300, imageUrl: 'assets/pug8.png' ,category: 'Pug Clasico'},
    { id: 9, name: 'Peque', price: 200, imageUrl: 'assets/pug9.png' ,category: 'Pug Clasico'},
    { id: 10, name: 'Ody', price: 200, imageUrl: 'assets/pug10.png' ,category: 'Pug Negro'},
    { id: 11, name: 'Rinty', price: 100, imageUrl: 'assets/pug11.png' ,category: 'Pug Negro'},
    { id: 12, name: 'Rambo', price: 250, imageUrl: 'assets/pug12.png' ,category: 'Pug Negro'},
    { id: 13, name: 'Pico', price: 100, imageUrl: 'assets/pug13.png' ,category: 'Pug Negro'},
    { id: 14, name: 'Rayo', price: 250, imageUrl: 'assets/pug14.png' ,category: 'Pug Blanco'},
    { id: 15, name: 'Beibi', price: 200, imageUrl: 'assets/pug15.png' ,category: 'Pug Blanco'},
    { id: 16, name: 'Copo', price: 300, imageUrl: 'assets/pug16.png' ,category: 'Pug Blanco'},
    { id: 17, name: 'Snow', price: 100, imageUrl: 'assets/pug17.png' ,category: 'Pug Blanco'},
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  editProduct(updated: Product) {
    const index = this.products.findIndex(p => p.id === updated.id);
    if (index !== -1) this.products[index] = updated;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}