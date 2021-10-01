import { Injectable } from "@angular/core";

import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { CartItem } from "../restaurant-detail/shopping-cart/cart-item.model";
import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shopping-cart.service";
import { Order, OrderItem } from "./order.model";

import { MEET_API } from '../app.api'

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: Http) { }

  itemsValue(): number {
    return this.cartService.total();
  }

  cartItems(): CartItem[] {
    return this.cartService.items
  }

  increaseQty(item: CartItem): void {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem): void {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem): void {
    this.cartService.removeItem(item);
  }

  clear(): void {
    this.cartService.clear();
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post(`${MEET_API}/orders`,
      JSON.stringify(order),
      new RequestOptions({ headers: headers })
    )
      .map(res => res.json())
  }

}
