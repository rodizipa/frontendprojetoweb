import {Product} from "./Product.ts";
import {Order} from "./Order.ts";

export type OrderItem = {
  quantity: number,
  product: Product,
  order: Order
}