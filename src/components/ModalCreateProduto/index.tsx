import React from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import {useFormik} from 'formik';
import { Produto } from '../../types';

interface ModalCreateProdutoProps {
    show: boolean;
    onHide: () => void;
    createProduto: (produto: Omit<Produto, 'id'>) => void;
}

const ModalCreateProduto: React.FC<ModalCreateProdutoProps> = ({
    show,
    onHide,
    createProduto
}) => {
    const formik = useFormik({
        initialValues: {
          nome: '',
          descricao: '',
          preco: 0,
          quantidade: 0
        },
        onSubmit: values => {
          createProduto({
            nome: values.nome,
            descricao: values.descricao,
            preco: values.preco,
            quantidade: values.quantidade
          })
          onHide()
        }
      })
  return (
    <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Criar Produto</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-5">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            id="nome"
            type="text"
            placeholder="Nome"
            value={formik.values.nome}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            id="descricao"
            type="text"
            placeholder="Descrição"
            value={formik.values.descricao}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Preço</Form.Label>
          <Form.Control
            id="preco"
            type="number"
            placeholder="Preço"
            value={formik.values.preco}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control
            id="quantidade"
            type="number"
            placeholder="Quantidade"
            value={formik.values.quantidade}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Button variant="success" type="submit" style={{marginRight: 15}}>
            Salvar
          </Button>
          <Button variant="danger" onClick={formik.handleReset}>
            Limpar
          </Button>
        </Form.Group>
      </Form>
    </Modal.Body>
  </Modal>
  );
}

export default ModalCreateProduto;