import axios from "axios";
import {environment} from "../environment.ts";
import {CartItem} from "../context/ShoppingCartContext.tsx";


type OrderItem = {
  quantity: number,
  product: {
    id: number
  }
}

export const SaveCartAPI = (orderItems: OrderItem[]) => {
  return axios.post(`${environment.API_URL}/order`, {orderItems});
}

export const SaveCart = async (cartItems: CartItem[]) => {
  const orderItems: OrderItem[] = [];

  cartItems.forEach(cartItem => {
    orderItems.push({
      quantity: cartItem.quantity, product: {id: cartItem.id}})
  })
  return SaveCartAPI(orderItems);
}
