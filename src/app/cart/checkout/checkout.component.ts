import { Component, OnInit } from '@angular/core';
import { Item } from 'src/_models/Item';
import { CartService } from 'src/_services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: Item[];
  totalPrice: number;

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.getItems();
    this.getSum();
  }

  getItems() {
    this.cart.getItems().subscribe(items => {
      this.items = items;
    }, error => {
      console.log('Cant get items from cart');
    });
  }

  getSum() {
    this.cart.getTotal().subscribe(total => {
      this.totalPrice = total;
    }, error => {
      console.log('Cannot get total price');
    });
  }

  refreshItems() {
    this.getItems();
    this.getSum();
  }

}
