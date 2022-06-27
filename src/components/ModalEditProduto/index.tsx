import React from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import {useFormik} from 'formik';
import { Produto } from '../../types';

interface ModalEditProdutoProps {
    show: Produto;
    onHide: () => void;
    updateProduto: (id: number, produto: Omit<Produto, 'id'>) => void;
}

const ModalEditProduto: React.FC<ModalEditProdutoProps> = ({
    show,
    onHide,
    updateProduto
}) => {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          nome: show.nome? show.nome : '',
          descricao: show.descricao? show.descricao: '',
          preco: show.preco? show.preco: 0,
          quantidade: show.quantidade? show.quantidade: 0
        },
        onSubmit: values => {
          updateProduto(
            show.id,
            {
            nome: values.nome,
            descricao: values.descricao,
            preco: values.preco,
            quantidade: values.quantidade
          })
          onHide()
        }
      })
  return (
    <Modal show={Object.keys(show).length > 0} onHide={onHide}>
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

export default ModalEditProduto;