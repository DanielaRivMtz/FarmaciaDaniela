import Carta from "./Carta";

function Cartas() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
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
        </div>

      
    </div>
  );
}

export default Cartas;
