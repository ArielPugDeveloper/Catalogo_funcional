import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  error?: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}


///Obtener los detalles de un producto específico cuando se entra a la página de detalle con manejo de errores
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe({
      next: (product) => this.product = product,
      error: (err) => {
        console.error(err);
        this.error = 'No se pudo cargar el producto';
      }
    });
  }
}