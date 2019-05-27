import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/_services/product.service';
import { Product } from 'src/_models/product';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productService.getProductsBySale();
  }
}
