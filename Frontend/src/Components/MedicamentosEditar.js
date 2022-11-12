import CartaEditable from "./CartaEditable";
import Menu from "./Menu";
import NuevoProductoModal from "./NuevoProductoModal";
import Footer from "./Footer";

function Medicamentos() {
    return (
        <div>
            <Menu />
            <div className="container">
                <h1 className="text-center mt-5 ">Medicamentos</h1>
                <input type="text" placeholder="Busca el medicamento" name="search" className="form-control mt-5" />
                <button type="button" class="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target={"#NuevoProductoModal"}>Agregar</button>
                <NuevoProductoModal />

                <div className="card-deck justify-content-center align-items-center m-5">
                    <div className="row">
                        <div className="col-md-4">
                            <CartaEditable />
                        </div>
                        <div className="col-md-4">
                            <CartaEditable />
                        </div>
                        <div className="col-md-4">
                            <CartaEditable />
                        </div>
                        <div className="col-md-4">
                            <CartaEditable />
                        </div>
                        <div className="col-md-4">
                            <CartaEditable />
                        </div>
                        <div className="col-md-4">
                            <CartaEditable />
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>

    );
}

export default Medicamentos;
