import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface ProductResponse {
  products: Product[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

///API USADA PARA EL PROYECTO:
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}


///Consigue los productos de la API para mostrarlos de una base de datos
  getProducts(page: number = 1, limit: number = 5): Observable<ProductResponse> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(apiProducts => {
        // Mapeo de cada producto para adaptar los campos a nuestro modelo
        const mappedProducts: Product[] = apiProducts.map(apiProduct => ({
          id: apiProduct.id,
          title: apiProduct.title,
          price: apiProduct.price,
          image: apiProduct.image,
          category: apiProduct.category,
          description: apiProduct.description
        }));

        // Paginación manual
        const start = (page - 1) * limit;
        const pagedProducts = mappedProducts.slice(start, start + limit);

        return { products: pagedProducts, total: mappedProducts.length };
      }),
      catchError(err => {
        console.error('Error cargando productos:', err);
        return throwError(() => new Error('No se pudo cargar la lista de productos'));
      })
    );
  }

///Selecciona productos segun su ID
  getProductById(id: number): Observable<Product> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(apiProduct => ({
        id: apiProduct.id,
        title: apiProduct.title,
        price: apiProduct.price,
        image: apiProduct.image,
        category: apiProduct.category,
        description: apiProduct.description
      })),
      catchError(err => {
        console.error('Error cargando producto:', err);
        return throwError(() => new Error('No se pudo cargar el producto'));
      })
    );
  }
}