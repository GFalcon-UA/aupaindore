import {Order} from "./order";
import {ComplexOrderItem} from "./complex-order-item";

export interface ComplexOrder extends Order {
  orderNumber: string
  label: string
  items: ComplexOrderItem[]
}
