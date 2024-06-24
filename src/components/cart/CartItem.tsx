import {useShoppingCart} from "../../context/ShoppingCartContext.tsx";
import {FindAllProducts} from "../../hooks/useProductData.ts";
import {Button, Stack} from "react-bootstrap";
import {formatCurrency} from "../../utilities/formatCurrency.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

type CartItemProps = {
  id: number,
  quantity: number,
}

export function CartItem({id, quantity}: CartItemProps) {
  const {data} = FindAllProducts();
  const {removeFromCart} = useShoppingCart();
  const product = data?.find((product) => product.id === id);

  if (product == null) return null;
  return (
      <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={product.imageUrl}
             style={{width: "75px", height: "125px", objectFit: "scale-down"}}/>
        <div className="me-auto">
          <div>
            <span>{product.name}</span>
             {quantity > 1 &&
              <span style={{fontSize: ".8rem"}} className="text-muted"> x{quantity}</span>
            }
          </div>
          <div className="text-muted">{formatCurrency(product.price)}</div>
        </div>
        <div> {formatCurrency(product.price * quantity)}</div>
        <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </Stack>
  )
}