import { EventEmitter, Injectable } from '@angular/core';
import { Product } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private wish: Product[] = []; // Explicitly type the array
  wishlistUpdated = new EventEmitter<void>();

  addTowish(product: Product) {
    this.wish.push(product);
    this.wishlistUpdated.emit();
    console.log(this.wish); // Check the contents of the wish
  }

  getwishItems(): Product[] {
    return this.wish;
  }

  removeFromwish(product: Product) {
    const index = this.wish.indexOf(product);
    if (index > -1) {
      this.wish.splice(index, 1);
      this.wishlistUpdated.emit();
    }
  }
}
