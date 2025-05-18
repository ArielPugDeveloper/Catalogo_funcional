export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category?: string; // opcional si no todos los productos lo tienen
}