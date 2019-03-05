import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Product } from 'src/_models/product';
import { ProductService } from 'src/_services/product.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @ViewChild('targetId') public targetId: ElementRef;
  product: Product;
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProduct(+this.route.snapshot.paramMap.get('id'));
    this.targetId.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

  getProduct(id: number) {
    this.product = this.productService.getProduct(id);
  }

}
