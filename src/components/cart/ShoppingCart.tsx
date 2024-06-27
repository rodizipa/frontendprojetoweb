import {Button, Card, Offcanvas, Stack} from "react-bootstrap";
import {useShoppingCart} from "../../context/ShoppingCartContext.tsx";
import {CartItem} from "./CartItem.tsx";
import {formatCurrency} from "../../utilities/formatCurrency.ts";
import {FindAllProducts} from "../../hooks/useProductData.ts";
import {useAuth} from "../../context/useAuthContext.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {SaveCart, SaveCartAPI} from "../../service/OrderService.ts";

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps) {
    const HandleSaveData = () => SaveCart();
    const {isLoggedIn} = useAuth();
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

                <Stack gap={3} className="mb-auto">
                    {cartItems.map((item) => (
                        <CartItem key={item.id} {...item}/>
                    ))}

                    <div className="ms-auto mt-3 fw-bold fs-5">
                        Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                        const i = data?.find(i => i.id === cartItem.id);
                        return total + (i?.price || 0) * cartItem.quantity;
                    }, 0))}
                    </div>

                    {
                        isLoggedIn() ?
                            (<Button variant="outline-success" onClick={() => HandleSaveData()}>
                                Finalizar Compra
                            </Button>)
                            : (
                                <Card border="danger" className="mt-auto">
                                    <Card.Body>
                      <span className="text-muted align-content-center text-center">
                          Para finalizar a compra, é necessário fazer login
                      </span>
                                    </Card.Body>
                                </Card>
                            )
                    }

                    <Card border="info" className="mt-auto">
                        <Card.Body>
                      <span className="text-muted align-content-center text-center">
                          Para editar a quantidade, visite a página de detalhes do item.
                      </span>
                        </Card.Body>
                    </Card>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}