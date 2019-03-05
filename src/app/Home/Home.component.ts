import { Component, OnInit } from '@angular/core';
import { Product } from 'src/_models/product';


@Component({
  selector: 'app-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];

  constructor() { }

  ngOnInit() {
  }

}
