import VerMasModal from "./VerMasModal";

function Carta() {
  return (
      <div className="card mt-3 text-center">
        <img src="https://www.farmaciavieitez.com/blog/wp-content/uploads/2016/11/farmaco-medicamento-farmacia.jpg" alt="med" />
        <div className='card-body'>
          <h4 className='card-title'>My title</h4>
          <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target={"#VerMasModal"}>Ver más</button>

          <VerMasModal />
        </div>
      </div>
  );
}

export default Carta;
