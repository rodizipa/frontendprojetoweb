import {Container} from 'react-bootstrap';
import {Navbar} from "./components/navbar/Navbar.tsx";
import {ShoppingCartProvider} from "./context/ShoppingCartContext.tsx";
import {AccountProvider} from "./context/useAuthContext.tsx";
import {RoutesIndex} from "./routes/RoutesIndex.tsx";

function App() {


  return (
      <>
        <AccountProvider>
          <ShoppingCartProvider>
            <Navbar/>
            <Container className="mb-4">
              <RoutesIndex/>
            </Container>
          </ShoppingCartProvider>
        </AccountProvider>
      </>
  )
}

export default App
