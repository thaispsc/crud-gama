import {useState} from 'react';
import {Fornecedor} from '../../types';

const useModal = () => {
  const [fornecedorCreateModal, setFornecedorCreateModal] = useState<boolean>(false);
  const [fornecedorEditModal, setFornecedorEditModal] = useState<Fornecedor>({} as Fornecedor);

  // Função para abrir o nosso modal
  const handleOpenCreateFornecedorModal = () => {
    setFornecedorCreateModal(true)
  }

  // Função para fechar o nosso modal
  const handleCloseCreateFornecedorModal = () => {
    setFornecedorCreateModal(false)
  }

    // Função para abrir o nosso modal de edição
    const handleOpenEditFornecedorModal = (fornecedor: Fornecedor) => {
      setFornecedorEditModal(fornecedor)
    }

     // Função para fechar o nosso modal de edição
  const handleCloseEditFornecedorModal = () => {
    setFornecedorEditModal({} as Fornecedor)
  }


  return {
    fornecedorCreateModal,
    handleOpenCreateFornecedorModal,
    handleCloseCreateFornecedorModal, 
    fornecedorEditModal,
    handleOpenEditFornecedorModal,
    handleCloseEditFornecedorModal
  };
};

export default useModal;
