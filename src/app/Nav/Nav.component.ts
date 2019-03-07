import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { CartService } from 'src/_services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public cart: CartService) { }

  ngOnInit() {
  }

}
