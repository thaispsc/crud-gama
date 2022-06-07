import React from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import {useFormik} from 'formik';
import { User } from '../../types';

interface ModalEditUserProps {
    show: User;
    onHide: () => void;
    updateUser: (id: number, user: Omit<User, 'id'>) => void;
}

const ModalEditUser: React.FC<ModalEditUserProps> = ({
    show,
    onHide,
    updateUser
}) => {
    const formik = useFormik({
      enableReinitialize: true,
        initialValues: {
          nome: show.nome? show.nome : '',
          idade: show.idade? show.idade: 0,
          cpf: show.cpf? show.cpf: 0,
          endereco: show.endereco? show.endereco: '',
          email: show.email? show.email: '',
          telefone: show.telefone? show.telefone: ''
        },
        onSubmit: values => {
          updateUser(
          show.id,
            {
            nome: values.nome,
            idade: values.idade,
            cpf: values.cpf,
            endereco: values.endereco,
            email: values.email,
            telefone: values.telefone
          })
          onHide()
        }
      })
  return (//object.key cria um array com os valores do seu objeto
    <Modal show={Object.keys(show).length > 0} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Editar Usuário</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-5">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            id="nome"
            type="text"
            placeholder="Nome Completo"
            value={formik.values.nome}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Idade</Form.Label>
          <Form.Control
            id="idade"
            type="number"
            placeholder="Sua idade"
            value={formik.values.idade}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>CPF</Form.Label>
          <Form.Control
            id="cpf"
            type="number"
            placeholder="Seu cpf"
            value={formik.values.cpf}
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

export default ModalEditUser;