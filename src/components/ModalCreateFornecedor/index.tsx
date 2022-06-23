import React from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import {useFormik} from 'formik';
import { Fornecedor } from '../../types';

interface ModalCreateFornecedorProps {
    show: boolean;
    onHide: () => void;
    createFornecedor: (fornecedor: Omit<Fornecedor, 'id'>) => void;
}

const ModalCreateFornecedor: React.FC<ModalCreateFornecedorProps> = ({
    show,
    onHide,
    createFornecedor
}) => {
    const formik = useFormik({
        initialValues: {
          razao: '',
          cnpj: 0,
          endereco: '',
          email: '',
          telefone: ''
        },
        onSubmit: values => {
          createFornecedor({
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
    <Modal show={show} onHide={onHide}>
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

export default ModalCreateFornecedor;