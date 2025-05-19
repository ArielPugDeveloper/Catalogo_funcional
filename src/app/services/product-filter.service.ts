import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductFilterService {
  filter(products: Product[], term: string): Product[] {
    const lowerTerm = term.toLowerCase();
    return products.filter(p =>
      p.name.toLowerCase().includes(lowerTerm) ||
      (p.category && p.category.toLowerCase().includes(lowerTerm))
    );
  }

  getSuggestions(products: Product[]): string[] {
    const categories = products.map(p => p.category || '');
    const names = products.map(p => p.name);
    return Array.from(new Set([...categories, ...names]));
  }
}