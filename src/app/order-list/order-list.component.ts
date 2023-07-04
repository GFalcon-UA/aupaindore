import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Ingredient} from "../model/ingredient";
import {OrderItem} from "../model/order-item";
import {SimpleOrder} from "../model/simple-order";
import {ComplexOrder} from "../model/complex-order";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnChanges, OnInit{
  @Input("ingred")
  ingredients: Ingredient[] = [];

  @Input("orders")
  orders: OrderItem[] = [];

  simpleOrders: SimpleOrder[] = [];
  complexOrders: ComplexOrder[] = [];

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.prepareOrderList()
  }

  private prepareOrderList() {
    debugger;
    for (let i = 0; i < this.orders.length; i++) {
      this.addToOrderList(this.orders[i]);
    }
  }

  private addToOrderList(item: OrderItem) {
    debugger;
  }

}
