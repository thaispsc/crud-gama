import React from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import {useFormik} from 'formik';
import { Fornecedor } from '../../types';

interface ModalEditFornecedorProps {
    show: Fornecedor;
    onHide: () => void;
    updateFornecedor: (id: number, fornecedor: Omit<Fornecedor, 'id'>) => void;
}

const ModalEditFornecedor: React.FC<ModalEditFornecedorProps> = ({
    show,
    onHide,
    updateFornecedor
}) => {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          razao: show.razao? show.razao: '',
          cnpj: show.cnpj? show.cnpj: 0,
          endereco: show.endereco? show.endereco: '',
          email: show.email? show.email: '',
          telefone: show.telefone? show.telefone: ''
        },
        onSubmit: values => {
          updateFornecedor(
            show.id,
            {
            razao: values.razao,
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
      <Modal.Title>Criar Fornecedor</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-5">
          <Form.Label>Razão Social</Form.Label>
          <Form.Control
            id="razao"
            type="text"
            placeholder="Razão Social"
            value={formik.values.razao}
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

export default ModalEditFornecedor;