import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoggedIn = false;
  userName: string | null = '';
  cartCount: number = 0;
  wishlistCount: number = 0;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userName = this.authService.getUserName();
    console.log(this.userName);

    this.cartCount = this.cartService.getCartItems().length;
    this.wishlistCount = this.wishlistService.getwishItems().length;

    // Subscribe to cart and wishlist updates if your services are set up to support this
    this.cartService.cartUpdated.subscribe(
      () => (this.cartCount = this.cartService.getCartItems().length)
    );
    this.wishlistService.wishlistUpdated.subscribe(
      () => (this.wishlistCount = this.wishlistService.getwishItems().length)
    );
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.userName = '';
  }
}
