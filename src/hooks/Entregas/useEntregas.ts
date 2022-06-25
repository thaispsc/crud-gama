import { useEffect, useState } from 'react';
import { renderEntregas, createEntrega, updateEntrega, deleteEntrega } from '../../interfaces/entregas';
import { Entrega } from '../../types';

// import { Container } from './styles';

const useEntrega = () => {
    const [entregaList, setEntregas] = useState<Entrega[]>([] as Entrega[])

    useEffect(() => {
        renderEntregas().then(entregas => setEntregas(entregas))
      },[])

       // Função para adicionar um novo usuário
  const handleCreateEntrega = async (entrega: Omit<Entrega, "id">) => {
    const newEntrega = await createFornecedor(entrega)
    setEntregas(
      oldEntregaList => [...oldEntregaList, newEntrega]
    )
  }

  //Função de exclusão de usuario
  const handleDeleteEntrega = async (id: number) => {
      await deleteEntrega(id)
      setEntregas(
        oldEntregaList => oldEntregaList.filter(
          entrega => entrega.id !== id
        )
      )
  }

  //Função de edição de usuario
  const handleUpdateEntrega = async (id: number, Entrega: Omit<Entrega, 'id'>) => {
    const newEntrega = await updateEntrega(id, Entrega);
    setEntregas(oldEntregas => oldEntregas.map(
      oldEntrega => oldEntrega.id === newEntrega.id ? newEntrega : oldEntrega
    ));
  };

  return {
      entregaList,
      handleCreateEntrega,
      handleDeleteEntrega,
      handleUpdateEntrega
  };
}

export default useEntrega;