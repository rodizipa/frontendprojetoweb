import {Route, Routes} from "react-router-dom";
import {ProductPage} from "../pages/produtos/ProductPage.tsx";
import ListProducts from "../pages/produtos/ListProducts.tsx";
import {Login} from "../pages/auth/LoginPage.tsx";
import {OrderList} from "../pages/order/OrderList.tsx";

export function RoutesIndex(){
  return (
        <Routes>
          {/*Homepage*/}
          <Route path="/" element={<ListProducts/>}/>

          <Route path="/order/my-orders" element={<OrderList/>}/>

          {/*Products*/}
          <Route path="/product/:id" element={<ProductPage/>}/>

          {/*Auth*/}
          <Route path="/login" element={<Login/>}/>
        </Routes>
  )
}