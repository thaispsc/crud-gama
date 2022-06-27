import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import ProdutoTable from "../../components/ProdutoTable";
import ModalCreateProduto from "../../components/ModalCreateProduto";
import ModalEditProduto from "../../components/ModalEditProduto";
import useModal from "../../hooks/Produtos/useModal";
import useProdutos from "../../hooks/Produtos/useProdutos";

function Produto(): JSX.Element {
  const {
    produtoCreateModal,
    handleOpenCreateProdutoModal,
    handleCloseCreateProdutoModal,
    produtoEditModal,
    handleOpenEditProdutoModal,
    handleCloseEditProdutoModal,
  } = useModal();
  const {
    produtoList,
    handleCreateProduto,
    handleDeleteProduto,
    handleUpdateProduto,
  } = useProdutos();

  return (
    <Fragment>
      <Navbar 
      onClick={handleOpenCreateProdutoModal} 
      entityName={"Produto"} />
      <ProdutoTable
        onClick={handleOpenEditProdutoModal}
        produtos={produtoList}
        onDelete={handleDeleteProduto}
      />
      <ModalCreateProduto
        show={produtoCreateModal}
        createProduto={handleCreateProduto}
        onHide={handleCloseCreateProdutoModal}
      />
      <ModalEditProduto
        show={produtoEditModal}
        updateProduto={handleUpdateProduto}
        onHide={handleCloseEditProdutoModal}
      />
    </Fragment>
  );
}

export default Produto;
