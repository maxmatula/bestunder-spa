import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/_services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/_models/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products: Product[];
  catName: string;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.catName = routeParams.name;
      this.getCategoryProducts(routeParams.name);
    });
  }

  getCategoryProducts(name: string) {
    this.products = this.productService.getProductsByCategory(name);
  }
}
