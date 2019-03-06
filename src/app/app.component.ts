import { Component, OnInit, OnChanges } from '@angular/core';
import { CartService } from 'src/_services/cart.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  cartLength: number;

  constructor(private router: Router, private cart: CartService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
      this.cart.setupCart();
  });
  }

}
