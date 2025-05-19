import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private products: Product[] = [
  { id: 1, name: 'Roberto', price: 100, imageUrl: 'assets/pug1.png', category: 'Pug Negro', description: 'Roberto es un pug curioso que ama explorar el jardín.' },
  { id: 2, name: 'Pugberto', price: 200, imageUrl: 'assets/pug2.png', category: 'Pug Clasico', description: 'Pugberto es amigable, tranquilo y le encanta dormir en tu regazo.' },
  { id: 3, name: 'Tilin', price: 300, imageUrl: 'assets/pug3.png', category: 'Pug Clasico', description: 'Tilin es juguetón y siempre está buscando atención.' },
  { id: 4, name: 'Pepe', price: 100, imageUrl: 'assets/pug4.png', category: 'Pug Clasico', description: 'Pepe es inteligente y siempre aprende nuevos trucos.' },
  { id: 5, name: 'Pedro', price: 200, imageUrl: 'assets/pug5.png', category: 'Pug Clasico', description: 'Pedro tiene un gran apetito y una personalidad tierna.' },
  { id: 6, name: 'Muñeca', price: 100, imageUrl: 'assets/pug6.png', category: 'Pug Clasico', description: 'Muñeca es dulce, mimosa y le encanta acurrucarse contigo.' },
  { id: 7, name: 'Memo', price: 150, imageUrl: 'assets/pug7.png', category: 'Pug Clasico', description: 'Memo es alegre, siempre mueve la cola y te recibe con saltos.' },
  { id: 8, name: 'Goldo', price: 300, imageUrl: 'assets/pug8.png', category: 'Pug Clasico', description: 'Goldo es grande y fuerte, pero muy gentil y amoroso.' },
  { id: 9, name: 'Peque', price: 200, imageUrl: 'assets/pug9.png', category: 'Pug Clasico', description: 'Peque es pequeño pero con un corazón gigante y mucha energía.' },
  { id: 10, name: 'Ody', price: 200, imageUrl: 'assets/pug10.png', category: 'Pug Negro', description: 'Ody es tranquilo, observador y siempre te sigue a todos lados.' },
  { id: 11, name: 'Rinty', price: 100, imageUrl: 'assets/pug11.png', category: 'Pug Negro', description: 'Rinty es un guardián fiel y protector de su familia.' },
  { id: 12, name: 'Rambo', price: 250, imageUrl: 'assets/pug12.png', category: 'Pug Negro', description: 'Rambo es fuerte, ágil y le encanta jugar a la pelota.' },
  { id: 13, name: 'Pico', price: 100, imageUrl: 'assets/pug13.png', category: 'Pug Negro', description: 'Pico es gracioso y siempre está haciendo caras divertidas.' },
  { id: 14, name: 'Rayo', price: 250, imageUrl: 'assets/pug14.png', category: 'Pug Blanco', description: 'Rayo es veloz, dinámico y le encanta correr en el parque.' },
  { id: 15, name: 'Beibi', price: 200, imageUrl: 'assets/pug15.png', category: 'Pug Blanco', description: 'Beibi es dulce, cariñosa y adora estar en brazos.' },
  { id: 16, name: 'Copo', price: 300, imageUrl: 'assets/pug16.png', category: 'Pug Blanco', description: 'Copo es como una nube blanca: suave, pacífico y sereno.' },
  { id: 17, name: 'Snow', price: 100, imageUrl: 'assets/pug17.png', category: 'Pug Blanco', description: 'Snow es juguetón, le gusta la nieve y siempre busca aventuras.' },
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
  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}