import { Component, OnInit } from '@angular/core';
import { Product } from 'src/_models/product';
import { ProductService } from 'src/_services/product.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct(+this.route.snapshot.paramMap.get('id'));
  }

  getProduct(id: number) {
    this.product = this.productService.getProduct(id);
  }

}
