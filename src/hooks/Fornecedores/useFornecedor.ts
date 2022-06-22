import { useEffect, useState } from 'react';
import { renderFornecedores, createFornecedor, updateFornecedor, deleteFornecedor } from '../../interfaces/fornecedores';
import { Fornecedor } from '../../types';

// import { Container } from './styles';

const useFornecedor = () => {
    const [fornecedorList, setFornecedores] = useState<Fornecedor[]>([] as Fornecedor[])

    useEffect(() => {
        renderFornecedores().then(fornecedores => setFornecedores(fornecedores))
      },[])

       // Função para adicionar um novo usuário
  const handleCreateFornecedor = async (fornecedor: Omit<Fornecedor, "id">) => {
    const newFornecedor = await createFornecedor(fornecedor)
    setFornecedores(
      oldFornecedorList => [...oldFornecedorList, newFornecedor]
    )
  }

  //Função de exclusão de usuario
  const handleDeleteFornecedor = async (id: number) => {
      await deleteFornecedor(id)
      setFornecedores(
        oldFornecedorList => oldFornecedorList.filter(
          fornecedor => fornecedor.id !== id
        )
      )
  }

  //Função de edição de usuario
  const handleUpdateFornecedor = async (id: number, Fornecedor: Omit<Fornecedor, 'id'>) => {
    const newFornecedor = await updateFornecedor(id, Fornecedor);
    setFornecedores(oldFornecedores => oldFornecedores.map(
      oldFornecedor => oldFornecedor.id === newFornecedor.id ? newFornecedor : oldFornecedor
    ));
  };

  return {
      fornecedorList,
      handleCreateFornecedor,
      handleDeleteFornecedor,
      handleUpdateFornecedor
  };
}

export default useFornecedor;