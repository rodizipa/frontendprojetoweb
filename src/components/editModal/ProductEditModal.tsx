import {Dispatch, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {TextInputComponent} from "../form/TextInputComponent.tsx";
import {SaveProduct} from "../../hooks/useProductData.ts";
import {Product} from "../../data/model/Product.ts";

interface ProductEditModalProps {
  id?: number;
  show?: boolean;
  setShow?: Dispatch<never>;
}

export function ProductEditModal(props: ProductEditModalProps) {
  const [show, setShow] = useState(false);
  const handleCloseModal = () => setShow(false);
  const groupClassProperties: string = "mb-3";
  const { mutate } = SaveProduct();

  const submit = () => {
    const product: Product = {
      price: 0,
      name: name
    }

    mutate(product);
  }

  // TODO criar states de demais hooks de produto
  const [name, setName] = useState("");

  return (
      <Modal
          show={show}
          onClose={handleCloseModal}
          backdrop="static"
          keyboard={false}>

        <Modal.Body>
          <h2>{props.id ? "Editar" : "Cadastrar"} Produto</h2>

          <Form>

            <Form.Group className={groupClassProperties} controlId="formProductName">
              <TextInputComponent label="Nome" value={name} updateValue={setName}/>
              <Form.Text className="text-muted">Insira o nome do produto</Form.Text>
            </Form.Group>

            <Form.Group className={groupClassProperties} controlId="formProductPrice">
              <Form.Label>Preço</Form.Label>
              <Form.Control type="number" min={0}/>
              <Form.Text className="text-muted">Insira o valor do produto</Form.Text>
            </Form.Group>

            <Form.Group className={groupClassProperties} controlId="formProductImageUrl">
              <Form.Label>Url de Imagem do Produto</Form.Label>
              <Form.Control type="url"/>
              <Form.Text className="text-muted">Insira a URL da imagem do produto</Form.Text>
            </Form.Group>

            {/*  TODO Seletor de Categorias*/}
            <Form.Group className={groupClassProperties} controlId="formProductCategories">
              <Form.Label>Categoria</Form.Label>
              <Form.Select disabled></Form.Select>
              <Form.Text className="text-muted">Insira a categoria do produto</Form.Text>
            </Form.Group>

            <Form.Group className={groupClassProperties} controlId="formProductDescription">
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={4}/>
              <Form.Text className="text-muted">Insira a descrição do produto</Form.Text>
            </Form.Group>


            <Button variant="primary" type="submit" onClick={submit}>Salvar</Button>
          </Form>
        </Modal.Body>
      </Modal>
  )
}