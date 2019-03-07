import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/_models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Output() liked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  switchLiked() {
    this.product.liked = !this.product.liked;
    this.liked.emit(true);
  }

}
