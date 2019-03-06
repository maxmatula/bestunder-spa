import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/_models/Item';
import { CartService } from 'src/_services/cart.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})

export class CartCardComponent implements OnInit {
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
