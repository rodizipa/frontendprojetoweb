import {Row} from "react-bootstrap";
import {ProductCard} from "../../components/card/ProductCard.tsx";
import {FindAllProducts} from "../../hooks/useProductData.ts";


function ListProducts() {
  const {data} = FindAllProducts();

  return <>
    <h1 className="text-center">Produtos</h1>

    <Row xs={1} md={3} className="g-3 mt-1">
      {data?.map(p =>
          <ProductCard key={p.id} {...p}/>)
      }
    </Row>
  </>
}

export default ListProducts