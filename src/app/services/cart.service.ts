import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  constructor() {}
/// Devuelve un observable del carrito actual y permite que otros componentes se suscriban y reciban actualizaciones automáticas cada vez que el carrito cambia.
  getCart(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

///Para añadir productos al carro
  addToCart(product: Product) {
    this.cartItems.push(product);
    this.cartSubject.next(this.cartItems);
  }


///Para remover productos del carro
  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.cartSubject.next(this.cartItems);
  }

}