import {Component, Input} from '@angular/core';
import {ComplexOrder} from "../model/complex-order";
import {SimpleOrder} from "../model/simple-order";

@Component({
  selector: 'app-order-cards',
  templateUrl: './order-cards.component.html',
  styleUrls: ['./order-cards.component.css']
})
export class OrderCardsComponent {

  @Input()
  orders: SimpleOrder[]|undefined = undefined;

  getOptions(): SimpleOrder[] {
    if(this.orders) {
      return this.orders;
    }
    return []
  }

  getCategory(): string {
    return this.getOptions()[0]?.category;
  }

  showHeader(): boolean {
    return this.getCategory().toLowerCase() != 'others';
  }
}
