import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import EntregaTable from "../../components/EntregaTable";
import ModalCreateEntrega from "../../components/ModalCreateEntrega";
import ModalEditEntrega from "../../components/ModalEditEntrega";
import useModal from "../../hooks/Entregas/useModal";
import useEntregas from "../../hooks/Entregas/useEntregas";

function Entrega(): JSX.Element {
  const {
    entregaCreateModal,
    handleOpenCreateEntregaModal,
    handleCloseCreateEntregaModal,
    entregaEditModal,
    handleOpenEditEntregaModal,
    handleCloseEditEntregaModal,
  } = useModal();
  const {
    entregaList,
    handleCreateEntrega,
    handleDeleteEntrega,
    handleUpdateEntrega,
  } = useEntregas();

  return (
    <Fragment>
      <Navbar 
      onClick={handleOpenCreateEntregaModal}
      entityName={"Entrega"} />
      <EntregaTable
        onClick={handleOpenEditEntregaModal}
        entregas={entregaList}
        onDelete={handleDeleteEntrega}
      />
      <ModalCreateEntrega
        show={entregaCreateModal}
        createEntrega={handleCreateEntrega}
        onHide={handleCloseCreateEntregaModal}
      />
      <ModalEditEntrega
        show={entregaEditModal}
        updateEntrega={handleUpdateEntrega}
        onHide={handleCloseEditEntregaModal}
      />
    </Fragment>
  );
}

export default Entrega;