import { Component, OnInit } from '@angular/core';
import { Product } from 'src/_models/product';
import { ProductService } from 'src/_services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
    console.log(this.products);
  }

  getProducts() {
   this.products = this.productService.getProducts();
  }

}
