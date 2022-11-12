import EditarProductoModal from "./EditarProductoModal";
import EliminarProductoModal from "./EliminarProductoModal";

function CartaEditable() {
    return (
      <div className="card mt-3">
        <img src="https://www.farmaciavieitez.com/blog/wp-content/uploads/2016/11/farmaco-medicamento-farmacia.jpg" alt="med" />
        <div className='card-body'>
          <h4 className='card-title'>My title</h4>
          <p className='card-text text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cras ullamcorper sapien id tortor malesuada, a sodales augue vulputate. </p>

          <div className="container mb-3">
            <button className="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target={"#EditarProductoModal"}>Editar</button>
            <button className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target={"#EliminarProductoModal"}>Eliminar</button>

            <EditarProductoModal />
            <EliminarProductoModal />
            
          </div>
        </div>
  
      </div>
    );
  }
  
  export default CartaEditable;
  