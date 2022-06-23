import { Fragment } from 'react'
import Navbar from "../../components/Navbar"
import UserTable from "../../components/UserTable"
import ModalCreateUser from '../../components/ModalCreateUser'
import ModalEditUser from '../../components/ModalEditUser'
import useModal from '../../hooks/Users/useModal'
import useUser from '../../hooks/Users/useUser'


function User(): JSX.Element {


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
      <Navbar onClick={handleOpenCreateUserModal} />
      <UserTable
      onClick={handleOpenEditUserModal}
        users={userList} 
        onDelete={handleDeleteUser}
      />
      <ModalCreateUser 
        show={userCreateModal} 
        createUser={handleCreateUser}
        onHide={handleCloseCreateUserModal}
      />
      <ModalEditUser 
        show={userEditModal} 
        updateUser={handleUpdateUser}
        onHide={handleCloseEditUserModal}
      />
      
    </Fragment>
  )
}

export default User;