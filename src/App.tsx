
import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import ListProducts from "./pages/produtos/ListProducts.tsx";
import {Navbar} from "./components/navbar/Navbar.tsx";
import {ShoppingCartProvider} from "./context/ShoppingCartContext.tsx";

function App() {


  return (
    <>
      <ShoppingCartProvider>
        <Navbar/>
        <Container className="mb-4">
          <Routes>
            {/*<Route path="/" element={<App/>}/>*/}
            <Route path="/" element={<ListProducts/>}/>
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  )
}

export default App
