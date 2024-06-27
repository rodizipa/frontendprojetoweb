import axios from "axios";
import {environment} from "../environment.ts";
import {useAuth} from "../context/useAuthContext.tsx";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
import {handleError} from "../utilities/ErrorHandler.tsx";

type OrderItem = {
    quantity: number,
    product: number
}

export const SaveCartAPI = async (orderItems: OrderItem[]): Promise<void> => {
        return await axios.post(`${environment.API_URL}/order`, orderItems);
}

export function SaveCart() {
    const {logout} = useAuth();
    const {cartItems, closeCart, removeFromCart} = useShoppingCart();
    const orderItems: OrderItem[] = [];

    try {
        cartItems.forEach(item => {
            const orderItem: OrderItem = {
                quantity: item.quantity,
                product: item.id
            }
            orderItems.push(orderItem);
        });

        const res = SaveCartAPI(orderItems);
        if (res) {
            cartItems.forEach(item => {removeFromCart(item.id)});
            closeCart();
        }

    } catch (error) {
        if (error.data.status === 403 || error.data.status === 401) {
            logout();
            closeCart();
        } else {
            handleError(error);
        }
    }
}