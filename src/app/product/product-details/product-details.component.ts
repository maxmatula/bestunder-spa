import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Product } from 'src/_models/product';
import { ProductService } from 'src/_services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/_models/Item';
import { CartService } from 'src/_services/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @ViewChild('targetId') public targetId: ElementRef;
  product: Product;
  item: Item;

  constructor(private productService: ProductService, private route: ActivatedRoute,
    private router: Router, private cart: CartService) {
      this.product = new Product();
      this.item = new Item();
     }

  ngOnInit() {
    this.getProduct(+this.route.snapshot.paramMap.get('id'));
    this.targetId.nativeElement.scrollIntoView({ behavior: 'smooth'});
    this.setItem();
  }

  getProduct(id: number) {
    this.product = this.productService.getProduct(id);
  }

  setItem() {
    this.item.product = this.product;
    this.item.quantity = 1;
  }

  addQuantity() {
    this.item.quantity += 1;
  }

  removeQuantity() {
    this.item.quantity -= 1;
  }

  addToCart() {
    this.cart.addItem(this.item);
  }

}
