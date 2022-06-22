import { Fragment } from 'react'
import Navbar from "../../components/Navbar"
import UserTable from "../../components/UserTable"
import ModalCreateUser from '../../components/ModalCreateUser'
import ModalEditUser from '../../components/ModalEditUser'
import useModal from '../../hooks/Users/useModal'
import useUser from '../../hooks/Users/useUser'


function Entregas(): JSX.Element {


  const {
    userCreateModal,
    handleOpenCreateUserModal,
    handleCloseCreateUserModal,
    userEditModal,
    handleOpenEditUserModal,
    handleCloseEditUserModal
  } = useModal()
  const {
    userList,
    handleCreateUser,
  handleDeleteUser,
  handleUpdateUser
} = useUser()
  
  return (
    <Fragment>
      {/*Navbar*/}
      <Navbar onClick={handleOpenCreateUserModal} />
      {/*Container*/}
      <UserTable
      onClick={handleOpenEditUserModal}
        users={userList} 
        onDelete={handleDeleteUser} 
        dados = {['Nome', 'CNPJ', 'Endereço', 'Email', 'Telefone' ]}
      />
      {/*Modal de criação do usuario*/}
      <ModalCreateUser 
        show={userCreateModal} 
        createUser={handleCreateUser}
        onHide={handleCloseCreateUserModal}
      />
      {/*Modal de edição de usuario*/}

      <ModalEditUser 
        show={userEditModal} 
        updateUser={handleUpdateUser}
        onHide={handleCloseEditUserModal}
      />
      
    </Fragment>
  )
}

export default Entregas;