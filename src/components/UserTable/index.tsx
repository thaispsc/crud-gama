import React from 'react';
import { Container, Table, Button} from "react-bootstrap"
import {User} from "../../types"
import {BsTrashFill, BsPenFill } from "react-icons/bs"

interface UserTableProps {
    users: User[];
    onDelete: (id: number) => void;
    onClick: (user: User) => void;
    dados: string[]; 
}

const UserTable: React.FC<UserTableProps> = ({
    users,
    onDelete,
    onClick,
    dados
}) => {
  return (
    <Container fluid="sm" style={{marginTop: 25}}>
    <h1>Lista de Usuários</h1>
    <Table striped borderless responsive hover variant="light">
      <thead>
        <tr>
        <th>#</th>
          {dados.map(dado => (
            <th>{dado}</th>
          ))}
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.nome}</td>
            <td>{user.idade}</td>
            <td>{user.cpf}</td>
            <td>{user.endereco}</td>
            <td>{user.email}</td>
            <td>{user.telefone}</td>
            <td style={{width: "10rem"}}>
                <Button 
                    type="button"
                    variant="primary"
                    style={{marginRight: 5}}
                    onClick={() => onClick(user)}
                >
                    <BsPenFill size={18}/>
                </Button>
                <Button 
                    type="button"
                    variant="danger"
                    style={{marginRight: 5}}
                    onClick={() => onDelete(user.id)}
                >
                    <BsTrashFill size={18}/>
                </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Container>
  );
}

export default UserTable;