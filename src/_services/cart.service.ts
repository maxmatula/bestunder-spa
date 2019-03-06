import { Injectable } from '@angular/core';
import { Item } from 'src/_models/Item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  setupCart() {
    const cartNew: Item[] = [];
    const cartFromStorage: Item[] = JSON.parse(localStorage.getItem('bestunderCart'));
    if (cartFromStorage == null) {
      localStorage.setItem('bestunderCart', JSON.stringify(cartNew));
    } else {
      localStorage.setItem('bestunderCart', JSON.stringify(cartFromStorage));
    }
  }

  clearCart() {
    const cartNew: Item[] = [];
    localStorage.setItem('bestunderCart', JSON.stringify(cartNew));
  }

  addItem(item: Item) {
    const cartNew: Item[] = JSON.parse(localStorage.getItem('bestunderCart'));
    item.id = cartNew.length + 1;
    cartNew.push(item);
    localStorage.setItem('bestunderCart', JSON.stringify(cartNew));
  }

  removeItem(item: Item) {
    const cartOld: Item[] = JSON.parse(localStorage.getItem('bestunderCart'));
    const cartNew: Item[] = cartOld.filter(c => c.id !== item.id);
    localStorage.setItem('bestunderCart', JSON.stringify(cartNew));
  }

  getCartCount(): Observable<number> {
    const cart: Item[] = JSON.parse(localStorage.getItem('bestunderCart'));
    return of<number>(cart.length);
  }

  getItems(): Observable<Item[]> {
    const items: Item[] = JSON.parse(localStorage.getItem('bestunderCart'));
    return of<Item[]>(items);
  }

  getTotal(): Observable<number> {
    const items: Item[] = JSON.parse(localStorage.getItem('bestunderCart'));
    let sum = 0;
    items.forEach(item => {
      sum += (item.product.price * item.quantity);
    });
    return of<number>(sum);
  }

}

