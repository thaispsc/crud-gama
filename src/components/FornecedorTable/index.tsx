import React from 'react';
import { Container, Table, Button} from "react-bootstrap"
import {Fornecedor} from "../../types"
import {BsTrashFill, BsPenFill } from "react-icons/bs"

interface FornecedorTableProps {
    fornecedores: Fornecedor[];
    onDelete: (id: number) => void;
    onClick: (fornecedor: Fornecedor) => void; 
}

const FornecedorTable: React.FC<FornecedorTableProps> = ({
    fornecedores,
    onDelete,
    onClick
}) => {
  return (
    <Container fluid="sm" style={{marginTop: 25}}>
    <h1>Lista de Fornecedores</h1>
    <Table striped borderless responsive hover variant="light">
    <thead>
        <tr>
          <th>#</th>
          <th>Razão Social</th>
          <th>CNPJ</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {fornecedores.map(fornecedor => (
          <tr key={fornecedor.id}>
            <td>{fornecedor.id}</td>
            <td>{fornecedor.razao}</td>
            <td>{fornecedor.cnpj}</td>
            <td style={{width: "10rem"}}>
                <Button 
                    type="button"
                    variant="primary"
                    style={{marginRight: 5}}
                    onClick={() => onClick(fornecedor)}
                >
                    <BsPenFill size={18}/>
                </Button>
                <Button 
                    type="button"
                    variant="danger"
                    style={{marginRight: 5}}
                    onClick={() => onDelete(fornecedor.id)}
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

export default FornecedorTable;