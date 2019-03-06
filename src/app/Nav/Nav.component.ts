import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { CartService } from 'src/_services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {
  cartLength: number;

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.updateCount();
  }

  updateCount() {
    this.cart.getCartCount().subscribe(length => {
      this.cartLength = length;
    });
  }

}
