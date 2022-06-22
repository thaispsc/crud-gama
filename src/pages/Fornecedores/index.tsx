import { Fragment } from 'react'
import Navbar from "../../components/Navbar"
import UserTable from "../../components/UserTable"
import ModalCreateUser from '../../components/ModalCreateUser'
import ModalEditUser from '../../components/ModalEditUser'
import useModal from '../../hooks/Fornecedores/useModal';
import useFornecedor from '../../hooks/Fornecedores/useFornecedor'


function Fornecedores(): JSX.Element {


  const {
    fornecedorCreateModal,
    handleOpenCreateFornecedorModal,
    handleCloseCreateFornecedorModal,
    fornecedorEditModal,
    handleOpenEditFornecedorModal,
    handleCloseEditFornecedorModal
  } = useModal()
  const {
    fornecedorList,
    handleCreateFornecedor,
  handleDeleteFornecedor,
  handleUpdateFornecedor
} = useFornecedor()
  
  return (
    <Fragment>
      {/*Navbar*/}
      <Navbar onClick={handleOpenCreateFornecedorModal} />
      {/*Container*/}
      <UserTable
      onClick={handleOpenEditFornecedorModal}
        Fornecedors={fornecedorList} 
        onDelete={handleDeleteFornecedor} 
        dados = {['Nome', 'CNPJ', 'Endereço', 'Email', 'Telefone' ]}
      />
      {/*Modal de criação do usuario*/}
      <ModalCreateUser 
        show={fornecedorCreateModal} 
        createFornecedor={handleCreateFornecedor}
        onHide={handleCloseCreateFornecedorModal}
      />
      {/*Modal de edição de usuario*/}

      <ModalEditUser 
        show={fornecedorEditModal} 
        updateFornecedor={handleUpdateFornecedor}
        onHide={handleCloseEditFornecedorModal}
      />
      
    </Fragment>
  )
}

export default Fornecedores;