import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import FornecedorTable from "../../components/FornecedorTable";
import ModalCreateFornecedor from "../../components/ModalCreateFornecedor";
import ModalEditFornecedor from "../../components/ModalEditFornecedor";
import useModal from "../../hooks/Fornecedores/useModal";
import useFornecedor from "../../hooks/Fornecedores/useFornecedor";

function Fornecedores(): JSX.Element {
  const {
    fornecedorCreateModal,
    handleOpenCreateFornecedorModal,
    handleCloseCreateFornecedorModal,
    fornecedorEditModal,
    handleOpenEditFornecedorModal,
    handleCloseEditFornecedorModal,
  } = useModal();
  const {
    fornecedorList,
    handleCreateFornecedor,
    handleDeleteFornecedor,
    handleUpdateFornecedor,
  } = useFornecedor();

  return (
    <Fragment>
      {/*Navbar*/}
      <Navbar 
      onClick={handleOpenCreateFornecedorModal}
      entityName={"Fornecedor"} />
      {/*Container*/}
      <FornecedorTable
        onClick={handleOpenEditFornecedorModal}
        fornecedores={fornecedorList}
        onDelete={handleDeleteFornecedor}
      />
      {/*Modal de criação do usuario*/}
      <ModalCreateFornecedor
        show={fornecedorCreateModal}
        createFornecedor={handleCreateFornecedor}
        onHide={handleCloseCreateFornecedorModal}
      />
      {/*Modal de edição de usuario*/}

      <ModalEditFornecedor
        show={fornecedorEditModal}
        updateFornecedor={handleUpdateFornecedor}
        onHide={handleCloseEditFornecedorModal}
      />
    </Fragment>
  );
}

export default Fornecedores;
