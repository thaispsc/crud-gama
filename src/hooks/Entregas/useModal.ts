import {useState} from 'react';
import {Entrega} from '../../types';

const useModal = () => {
  const [entregaCreateModal, setEntregaCreateModal] = useState<boolean>(false);
  const [entregaEditModal, setEntregaEditModal] = useState<Entrega>({} as Entrega);

  // Função para abrir o nosso modal
  const handleOpenCreateEntregaModal = () => {
    setEntregaCreateModal(true)
  }

  // Função para fechar o nosso modal
  const handleCloseCreateEntregaModal = () => {
    setEntregaCreateModal(false)
  }

    // Função para abrir o nosso modal de edição
    const handleOpenEditEntregaModal = (entrega: Entrega) => {
      setEntregaEditModal(entrega)
    }

     // Função para fechar o nosso modal de edição
  const handleCloseEditEntregaModal = () => {
    setEntregaEditModal({} as Entrega)
  }


  return {
    entregaCreateModal,
    handleOpenCreateEntregaModal,
    handleCloseCreateEntregaModal, 
    entregaEditModal,
    handleOpenEditEntregaModal,
    handleCloseEditEntregaModal
  };
};

export default useModal;
