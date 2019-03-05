import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/_services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCart();
  }

}
