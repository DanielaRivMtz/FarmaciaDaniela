//import Card from 'react-bootstrap/Card';
import EditarProductoModal from "./EditarProductoModal";
import EliminarProductoModal from "./EliminarProductoModal";

function CartaEditable() {
    return (
      <div className="card">
        <img src="https://www.farmaciavieitez.com/blog/wp-content/uploads/2016/11/farmaco-medicamento-farmacia.jpg" alt="med" />
        <div className='card-body'>
          <h4 className='card-title'>My title</h4>
          <p className='card-text text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cras ullamcorper sapien id tortor malesuada, a sodales augue vulputate. </p>

          <div className="container">
            <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target={"#EditarProductoModal"}>Editar</button>{" "}
            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target={"#EliminarProductoModal"}>Eliminar</button>{" "}

            <EditarProductoModal />
            <EliminarProductoModal />
            
          </div>
        </div>
  
      </div>
    );
  }
  
  export default CartaEditable;
  