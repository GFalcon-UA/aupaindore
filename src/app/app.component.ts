import { Component } from '@angular/core';
import {OrderItem} from "./model/order-item";
import {Ingredient} from "./model/ingredient";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'au-pain-dore';

  orders: OrderItem[] = [];
  ingredients: Ingredient[] = [];

  saveOrders(orders: OrderItem[]) {
    this.orders = orders;
    for (let i = 0; i < orders.length; i++) {
      let it = orders[i];
      if(it.isRoot && it.item) {
        this.ingredients.push({
          name: it.item,
          groupByOrder: false
        })
      }
    }
  }
}
