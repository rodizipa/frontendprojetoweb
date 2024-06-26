import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import './Navbar.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faDoorOpen, faUser} from "@fortawesome/free-solid-svg-icons";
import {useShoppingCart} from "../../context/ShoppingCartContext.tsx";
import {useAuth} from "../../context/useAuthContext.tsx";

export function Navbar() {
  const {isLoggedIn, logout,} = useAuth();
  const navigate = useNavigate();
  const {openCart, cartQuantity} = useShoppingCart()
  return (
      <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
            {/*<Nav.Link as={NavLink} to={"/product"}>Produtos</Nav.Link>*/}
            {/*<Nav.Link as={NavLink} to={"/category"}>Categorias</Nav.Link>*/}
          </Nav>
          {
            !isLoggedIn() ?
                (
                    <Button onClick={() => navigate(`/login`, {replace: true})} className="me-1">
                      <FontAwesomeIcon icon={faUser}/> Login
                    </Button>
                ) :
                (
                    <div>
                      <Nav>
                        <Nav.Link as={NavLink} to={"/order/my-orders"}>Meus Pedidos</Nav.Link>
                          <Button onClick={() => logout()} variant="outline-danger" className="me-1">
                              <FontAwesomeIcon icon={faDoorOpen}/> Logout
                          </Button>
                      </Nav>

                    </div>
                )
          }
          <Button
              onClick={openCart}
              className="cart-icon rounded-circle"
              variant="light">
            <FontAwesomeIcon icon={faCartShopping}/>
            {cartQuantity > 0 && (
                <div
                    className="item-count rounded-circle bg-danger d-flex justify-content-center align-items-center">
                  {cartQuantity}
                </div>
            )}
          </Button>
        </Container>
      </NavbarBs>
  )
}