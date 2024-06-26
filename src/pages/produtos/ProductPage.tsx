import {FindProductById} from "../../hooks/useProductData.ts";
import {useParams} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import {formatCurrency} from "../../utilities/formatCurrency.ts";
import {useShoppingCart} from "../../context/ShoppingCartContext.tsx";
import {faCartShopping, faMinus, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function ProductPage() {
  const {id} = useParams();
  const {data} = FindProductById(Number(id));
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingCart();
  const quantity = getItemQuantity(data == null ? -1 : Number(id));


  return (
      <Card className="h-100 container">
        {
            data?.imageUrl &&
            <Card.Img className="p-2" variant="top" src={data?.imageUrl} height="300px"
                      style={{objectFit: "scale-down"}}/>
        }
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-4">
              {data == null ? 'Produto Não Encontrado' : data?.name}
            </span>
            <span className="ms-1 text-muted">
              {data != null && formatCurrency(data?.price)}
            </span>
          </Card.Title>
          {data != null && <Card.Text className="border border-5 p-3 text-center">
            {data?.description}
          </Card.Text>}
          <div className="text-center gap-2">
            {data != null && quantity === 0 ? (
                    <Button onClick={() => increaseCartQuantity(Number(id))} variant="success"
                            className="col-12 col-md-6 me-2"><FontAwesomeIcon
                        icon={faCartShopping}/> Adicionar ao carrinho</Button>
                ) :
                (
                    <div>
                      <div className="d-flex align-items-center justify-content-center"
                           style={{gap: ".5rem"}}>
                        <Button onClick={() => decreaseCartQuantity(Number(id))}><FontAwesomeIcon
                            icon={faMinus}/></Button>
                        <div>
                          <span className="fs-3">{quantity}</span>
                        </div>
                        <Button onClick={() => increaseCartQuantity(Number(id))}><FontAwesomeIcon
                            icon={faPlus}/></Button>
                      </div>
                      <Button onClick={() => removeFromCart(Number(id))} variant="outline-danger text-center mt-2">
                        <FontAwesomeIcon icon={faTrash}/> Remover</Button>
                    </div>
                )
            }
          </div>
        </Card.Body>
      </Card>
  )
}