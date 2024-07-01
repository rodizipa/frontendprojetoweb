import {OrderItem} from "./OrderItem.ts";

export interface Order {
  id?: number,
  dateCreated: Date,
  status: string,
  orderItems: OrderItem[]
  totalPrice: number,
  numberOfOrderedItems: number
}

export interface OrderListItem{
  id?: number,
  dateCreated: Date,
  totalPrice: number,
  numberOfOrderedItems: number
  status: string
}