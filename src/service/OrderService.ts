import axios, {AxiosPromise} from "axios";
import {environment} from "../environment.ts";
import {CartItem} from "../context/ShoppingCartContext.tsx";
import {Order, OrderListItem} from "../data/model/Order.ts";
import {useQuery} from "@tanstack/react-query";

type OrderItem = {
    quantity: number,
    product: {
        id: number
    }
}

export const FindAllOrdersAPI = async (): AxiosPromise<Order[]> => {
    return axios.get(`${environment.API_URL}/order/my-order`);
}


export const SaveCartAPI = (orderItems: OrderItem[]) => {
    return axios.post(`${environment.API_URL}/order`, {orderItems});
}

export const SaveCart = async (cartItems: CartItem[]) => {
    const orderItems: OrderItem[] = [];

    cartItems.forEach(cartItem => {
        orderItems.push({
            quantity: cartItem.quantity, product: {id: cartItem.id}
        })
    })
    return SaveCartAPI(orderItems);
}

export function FindAllOrders() {
    const query = useQuery(
        {
            queryFn: FindAllOrdersAPI,
            queryKey: ['orders'],
            retry: 1
        })
    return {
        ...query, data: query.data?.data
    }
}