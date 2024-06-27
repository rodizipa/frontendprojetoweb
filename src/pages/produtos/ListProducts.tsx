import {Col, Row} from "react-bootstrap";
import {ProductCard} from "../../components/card/ProductCard.tsx";
import {FindAllProducts} from "../../hooks/useProductData.ts";


function ListProducts() {
    const {data} = FindAllProducts();

    return <>
        <h1 className="text-center">Produtos</h1>

        <Row xs={1} md={3} className="g-3">
            {data?.map(p =>
                <Col>
                  <ProductCard key={p.id} {...p}/>
                </Col>
            )
            }
        </Row>
    </>
}

export default ListProducts