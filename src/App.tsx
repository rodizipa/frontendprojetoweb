import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import ListProducts from "./pages/produtos/ListProducts.tsx";
import {Navbar} from "./components/navbar/Navbar.tsx";
import {ShoppingCartProvider} from "./context/ShoppingCartContext.tsx";
import {ProductPage} from "./pages/produtos/ProductPage.tsx";
import {AccountProvider} from "./context/useAuthContext.tsx";
import {Login} from "./pages/auth/LoginPage.tsx";

function App() {


  return (
      <>
        <AccountProvider>
          <ShoppingCartProvider>
            <Navbar/>
            <Container className="mb-4">
              <Routes>
                <Route path="/product/:id" element={<ProductPage/>}/>
                <Route path="/" element={<ListProducts/>}/>
                <Route path="/login" element={<Login/>}/>
              </Routes>
            </Container>
          </ShoppingCartProvider>
        </AccountProvider>
      </>
  )
}

export default App
