import { Component } from '@angular/core';
import { Product } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent {
  wishItems: Product[] = []; // Explicitly type the array
  discountAmount = 100; // Discount amount (could be dynamic)

  constructor(private wishService: WishlistService) {}

  ngOnInit() {
    this.wishItems = this.wishService.getwishItems();
  }

  removeFromwish(item: Product) {
    this.wishService.removeFromwish(item);
    this.wishItems = this.wishService.getwishItems();
  }
}
