import React from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import {useFormik} from 'formik';
import { Entrega } from '../../types';

interface ModalEditEntregaProps {
    show: Entrega;
    onHide: () => void;
    updateEntrega: (id: number, entrega: Omit<Entrega, 'id'>) => void;
}

const ModalEditEntrega: React.FC<ModalEditEntregaProps> = ({
    show,
    onHide,
    updateEntrega
}) => {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          nome: show.nome? show.nome : '',
          cnpj: show.cnpj? show.cnpj: 0,
          endereco: show.endereco? show.endereco: '',
          email: show.email? show.email: '',
          telefone: show.telefone? show.telefone: ''
        },
        onSubmit: values => {
          updateEntrega(
            show.id,
            {
            nome: values.nome,
            cnpj: values.cnpj,
            endereco: values.endereco,
            email: values.email,
            telefone: values.telefone
          })
          onHide()
        }
      })
  return (
    <Modal show={Object.keys(show).length > 0} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Criar Entrega</Modal.Title>
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
          <Form.Label>CNPJ</Form.Label>
          <Form.Control
            id="cnpj"
            type="text"
            placeholder="CNPJ"
            value={formik.values.cnpj}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            id="endereco"
            type="string"
            placeholder="Seu endereço"
            value={formik.values.endereco}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Email</Form.Label>
          <Form.Control
            id="email"
            type="string"
            placeholder="Seu email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            id="telefone"
            type="string"
            placeholder="Seu telefone"
            value={formik.values.telefone}
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

export default ModalEditEntrega;