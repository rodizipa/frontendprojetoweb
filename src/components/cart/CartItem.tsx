import {useShoppingCart} from "../../context/ShoppingCartContext.tsx";
import {FindAllProducts} from "../../hooks/useProductData.ts";
import {Button, Stack} from "react-bootstrap";
import {formatCurrency} from "../../utilities/formatCurrency.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

type CartItemProps = {
  id: number,
  quantity: number,
}

export function CartItem({id, quantity}: CartItemProps) {
  const {data} = FindAllProducts();
  const {removeFromCart} = useShoppingCart();
  const product = data?.find((product) => product.id === id);
  const navigate = useNavigate();

  if (product == null) return null;
  return (
      <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img onClick={() => {navigate(`/product/${id}`, {replace: true}); navigate(0)}} src={product.imageUrl}
             style={{width: "75px", height: "125px", objectFit: "scale-down", cursor: "pointer"}}/>
        <div className="me-auto">
          <div className="pe-auto" style={{cursor: "pointer"}}>
            <span onClick={() => {navigate(`/product/${id}`, {replace: true}); navigate(0)}}
                  className="text-decoration-underline">{product.name}</span>
            {quantity > 1 &&
                <span style={{fontSize: ".8rem"}} className="text-muted"> x{quantity}</span>
            }
          </div>
          <div className="text-muted">{formatCurrency(product.price)}</div>
        </div>
        <div> {formatCurrency(product.price * quantity)}</div>
        <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(id)}>
          <FontAwesomeIcon icon={faTrash}/>
        </Button>
      </Stack>
  )
}