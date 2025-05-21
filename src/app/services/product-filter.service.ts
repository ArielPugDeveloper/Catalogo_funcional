import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductFilterService {
  //Filtra productos segun su categoria
  filter(products: Product[], term: string): Product[] {
    const lowerTerm = term.toLowerCase();
    return products.filter(p =>
      p.title.toLowerCase().includes(lowerTerm) ||
      (p.category && p.category.toLowerCase().includes(lowerTerm))
    );
  }

  //Sugiere productos segun su cateogira o nombre en el buscador
  getSuggestions(products: Product[]): string[] {
    const categories = products.map(p => p.category || '');
    const names = products.map(p => p.title);
    return Array.from(new Set([...categories, ...names]));
  }
}