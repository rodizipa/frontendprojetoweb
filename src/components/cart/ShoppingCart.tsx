import {Offcanvas, Stack} from "react-bootstrap";
import {useShoppingCart} from "../../context/ShoppingCartContext.tsx";
import {CartItem} from "./CartItem.tsx";
import {formatCurrency} from "../../utilities/formatCurrency.ts";
import {FindAllProducts} from "../../hooks/useProductData.ts";

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps) {
  const {data} = FindAllProducts();
  const {closeCart, cartItems, cartQuantity} = useShoppingCart();
  return (
      <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrinho</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartQuantity === 0 && <span className="text-muted align-content-center text-center">
           Seu carrinho está vazio, adicione um produto.
          </span>}

          <Stack gap={3}>
            {cartItems.map((item) => (
                <CartItem key={item.id} {...item}/>
            ))}

            <div className="ms-auto fw-bold fs-5">
              Total {formatCurrency(cartItems.reduce((total, cartItem) => {
              const i = data?.find(i => i.id === cartItem.id);
              return total + (i?.price || 0) * cartItem.quantity;
            }, 0))}
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
  )
}