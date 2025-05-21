import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  imports: [CommonModule ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ///Se suscribe al observable para recibir notificaciones cuando el carrito cambia y se actualiza
  ngOnInit(): void {
    this.cartService.getCart().subscribe((items) => {
      this.cartItems = items;
      console.log('Carrito actualizado:', this.cartItems);
    });
  }

///Para remover productos del carro
  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }
}