import {useState} from 'react';
import {Produto} from '../../types';

const useModal = () => {
  const [produtoCreateModal, setProdutoCreateModal] = useState<boolean>(false);
  const [produtoEditModal, setProdutoEditModal] = useState<Produto>({} as Produto);

  // Função para abrir o nosso modal
  const handleOpenCreateProdutoModal = () => {
    setProdutoCreateModal(true)
  }

  // Função para fechar o nosso modal
  const handleCloseCreateProdutoModal = () => {
    setProdutoCreateModal(false)
  }

    // Função para abrir o nosso modal de edição
    const handleOpenEditProdutoModal = (produto: Produto) => {
      setProdutoEditModal(produto)
    }

     // Função para fechar o nosso modal de edição
  const handleCloseEditProdutoModal = () => {
    setProdutoEditModal({} as Produto)
  }


  return {
    produtoCreateModal,
    handleOpenCreateProdutoModal,
    handleCloseCreateProdutoModal, 
    produtoEditModal,
    handleOpenEditProdutoModal,
    handleCloseEditProdutoModal
  };
};

export default useModal;
