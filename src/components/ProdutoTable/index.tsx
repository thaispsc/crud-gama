import React from 'react';
import { Container, Table, Button} from "react-bootstrap"
import {Produto} from "../../types"
import {BsTrashFill, BsPenFill } from "react-icons/bs"

interface ProdutoTableProps {
    produtos: Produto[];
    onDelete: (id: number) => void;
    onClick: (produto: Produto) => void; 
}

const ProdutoTable: React.FC<ProdutoTableProps> = ({
    produtos,
    onDelete,
    onClick
}) => {
  return (
    <Container fluid="sm" style={{marginTop: 25}}>
    <h1>Lista de Produtos</h1>
    <Table striped borderless responsive hover variant="light">
    <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map(produto => (
          <tr key={produto.id}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>{produto.preco}</td>
            <td style={{width: "10rem"}}>
                <Button 
                    type="button"
                    variant="primary"
                    style={{marginRight: 5}}
                    onClick={() => onClick(produto)}
                >
                    <BsPenFill size={18}/>
                </Button>
                <Button 
                    type="button"
                    variant="danger"
                    style={{marginRight: 5}}
                    onClick={() => onDelete(produto.id)}
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

export default ProdutoTable;