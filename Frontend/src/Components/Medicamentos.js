import CartaEditable from "./CartaEditable";

function Medicamentos() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
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
        </div>

      
    </div>
  );
}

export default Medicamentos;
