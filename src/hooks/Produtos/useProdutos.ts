import { useEffect, useState } from 'react';
import { renderProdutos, createProduto, updateProduto, deleteProduto } from '../../interfaces/produtos';
import { Produto } from '../../types';

// import { Container } from './styles';

const useProduto = () => {
    const [produtoList, setProdutos] = useState<Produto[]>([] as Produto[])

    useEffect(() => {
        renderProdutos().then(produtos => setProdutos(produtos))
      },[])

       // Função para adicionar um novo usuário
  const handleCreateProduto = async (produto: Omit<Produto, "id">) => {
    const newProduto = await createProduto(produto)
    setProdutos(
      oldProdutoList => [...oldProdutoList, newProduto]
    )
  }

  //Função de exclusão de usuario
  const handleDeleteProduto = async (id: number) => {
      await deleteProduto(id)
      setProdutos(
        oldProdutoList => oldProdutoList.filter(
          produto => produto.id !== id
        )
      )
  }

  //Função de edição de usuario
  const handleUpdateProduto = async (id: number, Produto: Omit<Produto, 'id'>) => {
    const newProduto = await updateProduto(id, Produto);
    setProdutos(oldProdutos => oldProdutos.map(
      oldProduto => oldProduto.id === newProduto.id ? newProduto : oldProduto
    ));
  };

  return {
      produtoList,
      handleCreateProduto,
      handleDeleteProduto,
      handleUpdateProduto
  };
}

export default useProduto;