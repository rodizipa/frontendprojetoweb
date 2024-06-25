import {Button, Card} from "react-bootstrap";
import {ReactElement} from "react";
import {formatCurrency} from "../../utilities/formatCurrency.ts";
import {Product} from "../../data/model/Product.ts";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useShoppingCart} from "../../context/ShoppingCartContext.tsx";

export function ProductCard({id = -1, name, price, imageUrl}: Product): ReactElement {
  const {increaseCartQuantity} = useShoppingCart()

  return (
      <Card className="h-100">
        <Card.Img className="p-2" variant="top" src={imageUrl} height="300px"
                  style={{objectFit: "scale-down"}}/>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-4">
              {name}
            </span>
            <span className="ms-1 text-muted">
              {formatCurrency(price)}
            </span>
          </Card.Title>
          <div className="mt-auto text-center gap-2">
            <Button className="col-12 col-md-6 me-2">Detalhes</Button>
            <Button variant="success" onClick={() => increaseCartQuantity(id)}
                    className="mt-1 mt-md-0 col-12 col-md-3"><FontAwesomeIcon
                icon={faCartShopping}/></Button>
          </div>
            <div>

            </div>
        </Card.Body>
      </Card>
  )
}