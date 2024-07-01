import axios from "axios";
import {environment} from "../environment.ts";
import {CartItem} from "../context/ShoppingCartContext.tsx";
import {OrderListItem} from "../data/model/Order.ts";

type OrderItemDTO = {
  quantity: number,
  product: {
    id: number
  }
}

export const FindAllOrdersAPI = (page = 1, size = 5) => {
  return axios.get<OrderListItem[]>(`${environment.API_URL}/order/page`, {page: page, size: size});
}


export const SaveCartAPI = (orderItems: OrderItemDTO[]) => {
  return axios.post(`${environment.API_URL}/order`, {orderItems});
}

export const SaveCart = async (cartItems: CartItem[]) => {
  const orderItems: OrderItemDTO[] = [];

  cartItems.forEach(cartItem => {
    orderItems.push({
      quantity: cartItem.quantity, product: {id: cartItem.id}})
  })
  return SaveCartAPI(orderItems);
}
