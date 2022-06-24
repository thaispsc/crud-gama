import React from 'react';
import { Container, Table, Button} from "react-bootstrap"
import {Entrega} from "../../types"
import {BsTrashFill, BsPenFill } from "react-icons/bs"

interface EntregaTableProps {
    entregas: Entrega[];
    onDelete: (id: number) => void;
    onClick: (entrega: Entrega) => void; 
}

const EntregaTable: React.FC<EntregaTableProps> = ({
    entregas,
    onDelete,
    onClick
}) => {
  return (
    <Container fluid="sm" style={{marginTop: 25}}>
    <h1>Lista de Entregas</h1>
    <Table striped borderless responsive hover variant="light">
    <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>CNPJ</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {entregas.map(entrega => (
          <tr key={entrega.id}>
            <td>{entrega.id}</td>
            <td>{entrega.nome}</td>
            <td>{entrega.cnpj}</td>
            <td style={{width: "10rem"}}>
                <Button 
                    type="button"
                    variant="primary"
                    style={{marginRight: 5}}
                    onClick={() => onClick(entrega)}
                >
                    <BsPenFill size={18}/>
                </Button>
                <Button 
                    type="button"
                    variant="danger"
                    style={{marginRight: 5}}
                    onClick={() => onDelete(entrega.id)}
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

export default EntregaTable;