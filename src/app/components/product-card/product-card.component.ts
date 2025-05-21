import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  @Output() add = new EventEmitter<Product>();
///Uso del servicio para añadir productos al carro
  addToCart() {
    console.log('Botón clicado - producto emitido:', this.product);
    this.add.emit(this.product);
  }

  constructor(private router: Router) {}

///Para navegar a la pagina de detalles
  goToDetail() {
    this.router.navigate(['/producto', this.product.id]);
  }
}

