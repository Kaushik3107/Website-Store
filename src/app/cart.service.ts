import { EventEmitter, Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = []; // Explicitly type the array
  cartUpdated = new EventEmitter<void>();

  addToCart(product: Product) {
    this.cart.push(product);
    this.cartUpdated.emit();
    console.log(this.cart); // Check the contents of the cart
  }

  getCartItems(): Product[] {
    return this.cart;
  }

  removeFromCart(product: Product) {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.cartUpdated.emit();
    }
  }
}
