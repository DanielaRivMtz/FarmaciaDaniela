import Carta from "./Carta";
import Footer from "./Footer";
import MenuEdicion from "./MenuEdicion";

function Medicamentos() {
    return (
        <div>
            <MenuEdicion />
            <div className="container">
                <h1 className="text-center mt-5 ">Medicamentos</h1>
                <input type="text" placeholder="Busca el medicamento" name="search" className="form-control mt-5" />

                <div className="card-deck justify-content-center align-items-center m-5">
                    <div className="row">
                        <div className="col-md-4">
                            <Carta />
                        </div>
                        <div className="col-md-4">
                            <Carta />
                        </div>
                        <div className="col-md-4">
                            <Carta />
                        </div>
                        <div className="col-md-4">
                            <Carta />
                        </div>
                        <div className="col-md-4">
                            <Carta />
                        </div>
                        <div className="col-md-4">
                            <Carta />
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>

    );
}

export default Medicamentos;
