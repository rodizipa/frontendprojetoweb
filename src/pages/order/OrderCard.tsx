import {useNavigate} from "react-router-dom";
import {Card} from "react-bootstrap";
import {formatCurrency} from "../../utilities/formatCurrency.ts";

type Prop = {
    id: number;
    totalPrice: number,
    status: string,
    dateCreated: string
}

export function OrderCard({id=-1, totalPrice, status, dateCreated}: Prop) {

    return (
        <Card>
            <Card.Body>
                <div className="col-12" key={id}>
                    <Card.Title>
                        <div className="link">ID: {id}</div>
                    </Card.Title>
                    <div className="row">
                        <div className="col-3">

                        </div>
                        <div className="col-3">
                            Total: {formatCurrency(totalPrice)}
                        </div>
                        <div className="col-3">
                            Status: {status}
                        </div>
                        <div className="col-3">
                            Data: {dateCreated}
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}