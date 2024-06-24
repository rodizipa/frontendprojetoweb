import {createContext, ReactNode, useContext, useState} from "react";
import {ShoppingCart} from "../components/cart/ShoppingCart.tsx";
import {useLocalStorage} from "../hooks/useLocalStorage.ts";

type ShoppingCartProviderProps = {
  children: ReactNode;
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  cartQuantity: number
  cartItems: CartItem[]
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
}

type CartItem = {
  id: number,
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const cartQuantity = cartItems.length;
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems(currentCart => {
      if (currentCart.find(item => item.id === id) == null) {
        return [...currentCart, {id, quantity: 1}];
      }
      return currentCart.map(item => {
        if (item.id === id) return {...item, quantity: item.quantity + 1};
        return item;
      });
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems(currentCart => {
      if (currentCart.find(item => item.id === id)?.quantity === 1) {
        return currentCart.filter(i => i.id !== id);
      }
      return currentCart.map(item => {
        if (item.id === id) return {...item, quantity: item.quantity - 1};
        return item;
      });
    });
  }

  function removeFromCart(id: number) {
    setCartItems(currentCart => {
      return currentCart.filter(i => i.id !== id);
    })
  }

  return <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart
      }}>
    {children}
    <ShoppingCart isOpen={isOpen}/>
  </ShoppingCartContext.Provider>;
}