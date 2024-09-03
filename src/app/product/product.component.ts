import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService, Product } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private wishService: WishlistService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.product = this.getProductById(productId);
  }

  getProductById(id: string | null): Product | undefined {
    // Assuming you have a method to get a product by its ID
    const products: Product[] = [
      {
        id: '1',
        name: 'Xiaomi',
        price: 75000,
        image: 'assets/p1.jpg',
        description:
          '128 GB ROM 17.02 cm (6.7 inch) Super Retina XDR Display 12MP + 12MP + 12MP | 12MP Front Camera A14 Bionic Chip with Next Generation Neural Engine Processor Ceramic Shield | Industry-leading IP68 Water Resistance All Screen OLED Display LiDAR Scanner for Improved AR Experiences, Night Mode Portraits',
      },
      {
        id: '2',
        name: 'Redmi 13 Pro',
        price: 150000,
        image: 'assets/p2.png',
        description:
          '8 GB RAM | 128 GB ROM 15.49 cm (6.1 inch) Full HD+ Display 50MP + 10MP + 12MP | 12MP Front Camera 3900 mAh Lithium Ion Battery Qualcomm Snapdragon 8 Gen 2 Processor',
      },
      {
        id: '3',
        name: 'Redmi Mobile 13',
        price: 20000,
        image: 'assets/redmi.jpeg',
        description:
          '6 GB RAM | 128 GB ROM 17.25 cm (6.79 inch) Full HD+ Display 108MP Rear Camera 5030 mAh Battery Qualcomm SM4450 Snapdragon 4 Gen 2 AE (4 nm) Processor',
      },
      {
        id: '4',
        name: 'iPhone 15',
        price: 180000,
        image: 'assets/iphone.jpeg',
        description:
          '128 GB ROM 17.02 cm (6.7 inch) Super Retina XDR Display 12MP + 12MP + 12MP | 12MP Front Camera A14 Bionic Chip with Next Generation Neural Engine Processor Ceramic Shield | Industry-leading IP68 Water Resistance All Screen OLED Display LiDAR Scanner for Improved AR Experiences, Night Mode Portraits',
      },
      {
        id: '5',
        name: 'Samsung s23',
        price: 150000,
        image: 'assets/s23.jpeg',
        description:
          '8 GB RAM | 128 GB ROM 15.49 cm (6.1 inch) Full HD+ Display 50MP + 10MP + 12MP | 12MP Front Camera 3900 mAh Lithium Ion Battery Qualcomm Snapdragon 8 Gen 2 Processor',
      },
      {
        id: '1',
        name: 'Xiaomi',
        price: 75000,
        image: 'assets/p1.jpg',
        description:
          '128 GB ROM 17.02 cm (6.7 inch) Super Retina XDR Display 12MP + 12MP + 12MP | 12MP Front Camera A14 Bionic Chip with Next Generation Neural Engine Processor Ceramic Shield | Industry-leading IP68 Water Resistance All Screen OLED Display LiDAR Scanner for Improved AR Experiences, Night Mode Portraits',
      },
      {
        id: '2',
        name: 'Redmi 13 Pro',
        price: 150000,
        image: 'assets/p2.png',
        description:
          '8 GB RAM | 128 GB ROM 15.49 cm (6.1 inch) Full HD+ Display 50MP + 10MP + 12MP | 12MP Front Camera 3900 mAh Lithium Ion Battery Qualcomm Snapdragon 8 Gen 2 Processor',
      },
      {
        id: '3',
        name: 'Redmi Mobile 13',
        price: 20000,
        image: 'assets/redmi.jpeg',
        description:
          '6 GB RAM | 128 GB ROM 17.25 cm (6.79 inch) Full HD+ Display 108MP Rear Camera 5030 mAh Battery Qualcomm SM4450 Snapdragon 4 Gen 2 AE (4 nm) Processor',
      },
      {
        id: '4',
        name: 'iPhone 15',
        price: 180000,
        image: 'assets/iphone.jpeg',
        description:
          '128 GB ROM 17.02 cm (6.7 inch) Super Retina XDR Display 12MP + 12MP + 12MP | 12MP Front Camera A14 Bionic Chip with Next Generation Neural Engine Processor Ceramic Shield | Industry-leading IP68 Water Resistance All Screen OLED Display LiDAR Scanner for Improved AR Experiences, Night Mode Portraits',
      },
      {
        id: '1',
        name: 'Xiaomi',
        price: 75000,
        image: 'assets/p1.jpg',
        description:
          '128 GB ROM 17.02 cm (6.7 inch) Super Retina XDR Display 12MP + 12MP + 12MP | 12MP Front Camera A14 Bionic Chip with Next Generation Neural Engine Processor Ceramic Shield | Industry-leading IP68 Water Resistance All Screen OLED Display LiDAR Scanner for Improved AR Experiences, Night Mode Portraits',
      },
      {
        id: '2',
        name: 'Redmi 13 Pro',
        price: 150000,
        image: 'assets/p2.png',
        description:
          '8 GB RAM | 128 GB ROM 15.49 cm (6.1 inch) Full HD+ Display 50MP + 10MP + 12MP | 12MP Front Camera 3900 mAh Lithium Ion Battery Qualcomm Snapdragon 8 Gen 2 Processor',
      },
      {
        id: '3',
        name: 'Redmi Mobile 13',
        price: 20000,
        image: 'assets/redmi.jpeg',
        description:
          '6 GB RAM | 128 GB ROM 17.25 cm (6.79 inch) Full HD+ Display 108MP Rear Camera 5030 mAh Battery Qualcomm SM4450 Snapdragon 4 Gen 2 AE (4 nm) Processor',
      },
      // Add more products here
    ];
    return products.find((product) => product.id === id);
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
      this.router.navigate(['/cart']);
    } else {
      console.error('Product is undefined');
    }
  }

  addToWish() {
    if (this.product) {
      this.wishService.addTowish(this.product);
      this.router.navigate(['/wishlist']);
    } else {
      console.error('Product is undefined');
    }
  }
}
