import {FindAllOrders} from "../../service/OrderService.ts";
import {Row} from "react-bootstrap";
import {OrderCard} from "./OrderCard.tsx";

export function OrderList() {
    const {data} = FindAllOrders();

    return (
        <>
            <h1>Meus Pedidos</h1>
            <Row xs={12}>
                {data?.map(order =>
                    <OrderCard {...order}/>
                )
                }
            </Row>
        </>
    )

}