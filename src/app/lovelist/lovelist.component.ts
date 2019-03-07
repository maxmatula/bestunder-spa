import { Component, OnInit } from '@angular/core';
import { Product } from 'src/_models/product';
import { ProductService } from 'src/_services/product.service';

@Component({
  selector: 'app-lovelist',
  templateUrl: './lovelist.component.html',
  styleUrls: ['./lovelist.component.css']
})
export class LovelistComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.updateLoveList();
  }

  updateLoveList() {
    this.productService.getLoveList().subscribe(list => {
      this.products = list;
    });
  }

}
