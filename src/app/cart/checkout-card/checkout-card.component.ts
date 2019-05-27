import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/_models/Item';
import { CartService } from 'src/_services/cart.service';

@Component({
  selector: 'app-checkout-card',
  templateUrl: './checkout-card.component.html',
  styleUrls: ['./checkout-card.component.css']
})
export class CheckoutCardComponent implements OnInit {
  @Input() item: Item;
  @Output() removed: EventEmitter<any> = new EventEmitter();

  constructor(private cart: CartService) { }

  ngOnInit() {
  }

  removeItem() {
    this.cart.removeItem(this.item);
    this.removed.emit(true);
  }
}
