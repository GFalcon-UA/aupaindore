import { Injectable } from '@angular/core';
import {SimpleOrder} from "../model/simple-order";
import {ComplexOrder} from "../model/complex-order";
import {OrderItem} from "../model/order-item";
import {CategoryService} from "./category.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private simpleOrders: SimpleOrder[] = [];
  private complexOrders: ComplexOrder[] = [];

  constructor(private categoryService: CategoryService) { }

  public getSimpleOrders(): SimpleOrder[] {
    return JSON.parse(JSON.stringify(this.simpleOrders));
  }

  public getSimpleOrdersLength() : number {
    return this.simpleOrders.length;
  }

  public getSandwiches() : SimpleOrder[] {
    return this.getSimpleOrders().filter(ord => ord.category === 'Sandwiches')
  }

  public getSandwichesOnCroissant() : SimpleOrder[] {
    return this.getSimpleOrders().filter(ord => ord.category === 'Sandwiches on croissant')
  }

  public getSalads() : SimpleOrder[] {
    return this.getSimpleOrders().filter(ord => ord.category === 'Salads')
  }

  public getOthers() : SimpleOrder[] {
    return this.getSimpleOrders().filter(ord => ord.category === 'others')
  }

  public getComplexOrders(): ComplexOrder[] {
    return JSON.parse(JSON.stringify(this.complexOrders));
  }

  public getComplexOrderLength() : number {
    return this.complexOrders.length;
  }

  public setSimpleOrders(orders: SimpleOrder[]): void {
    this.simpleOrders = orders;
  }

  public setComplexOrders(orders: ComplexOrder[]): void {
    this.complexOrders = orders;
  }

  public prepareOrderList(orderItems : OrderItem[]) {
    let complexOrder : ComplexOrder|undefined = undefined;
    for (let i = 0; i < orderItems.length; i++) {
      const item = orderItems[i];
      if(this.isThreeSaladCombo(item)) {
        let n = item.item ? item.item : '';
        if(item.isRoot) {
          if(complexOrder) {
            this.complexOrders.push(complexOrder);
            complexOrder = undefined;
          }
          complexOrder = {
            orderNumber: item.bagNumber ? item.bagNumber : "",
            label: item.label ? item.label : "",
            name: n,
            category: this.categoryService.markSalads(),
            items: []
          };
        } else {
          if(complexOrder) {
            complexOrder?.items.push({
              name: n
            })
          }
        }
      } else {
        if(item.isRoot) {
          if(complexOrder) {
            this.complexOrders.push(complexOrder);
            complexOrder = undefined;
          }
          if(item.hasOption) {
            // skip
          } else {
            this.addToOrderList(orderItems[i]);
          }
        } else {
          this.addToOrderList(orderItems[i]);
        }
      }

    }
    if(complexOrder) {
      this.complexOrders.push(complexOrder);
      complexOrder = undefined;
    }
    this.complexOrders = this.complexOrders.sort((a, b) => a.orderNumber.localeCompare(b.orderNumber))
    this.simpleOrders = this.simpleOrders.sort((a, b) => a.name.localeCompare(b.name));
  }

  private isThreeSaladCombo(orderItem: OrderItem): boolean {
    return !!orderItem.item?.trim().startsWith("3 Salads Combo")
  }

  private addToOrderList(orderItem: OrderItem) {
    let name = orderItem.item;
    if (!name) {
      return
    }
    if(this.isThreeSaladCombo(orderItem)) {
      // skip
    } else {
      let simpleOrder = this.getAlreadyOrderedAmount(name);
      if(simpleOrder.amount > 0) {
        let index = this.simpleOrders.indexOf(simpleOrder);
        this.simpleOrders[index] = {
          name: name,
          category: this.categoryService.recognize(name),
          amount: simpleOrder.amount + 1
        }
      } else {
        this.simpleOrders.push({
          name: name,
          category: this.categoryService.recognize(name),
          amount: 1
        })
      }
    }
  }

  private getAlreadyOrderedAmount(pred: string): SimpleOrder {
    let amount = 0;
    for (let i = 0; i < this.simpleOrders.length; i++){
      if (this.simpleOrders[i].name === pred) {
        return this.simpleOrders[i];
      }
    }
    return {
      name: pred,
      category: this.categoryService.markOthers(),
      amount: 0
    };
  }
}
