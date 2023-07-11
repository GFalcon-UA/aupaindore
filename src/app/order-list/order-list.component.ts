import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Ingredient} from "../model/ingredient";
import {OrderItem} from "../model/order-item";
import {SimpleOrder} from "../model/simple-order";
import {ComplexOrder} from "../model/complex-order";
import {ExcelService} from "../service/excel.service";
import {OrderService} from "../service/order.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnChanges, OnInit{


  constructor(private orderService: OrderService) {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {

  }

  getSimpleOrders(): SimpleOrder[] {
    return this.orderService.getSimpleOrders();
  }

  getSimpleOrdersLength(): number {
    return this.orderService.getSimpleOrdersLength();
  }

  getComplexOrders(): ComplexOrder[] {
    return this.orderService.getComplexOrders();
  }

  getComplexOrdersLength(): number {
    return this.orderService.getComplexOrderLength();
  }

  getTitle(ord: ComplexOrder): string {
    return ord.orderNumber + " - " + ord.name
  }

}
