import React from 'react'

function VerMasModal() {
    return (
        <div className="modal fade" id="VerMasModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Nombre medicamento</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label for="precio" className="form-label">Precio: </label>
                            </div>
                            <div class="mb-3">
                                <label for="descripcion" className="form-label">Cantidad: </label>
                            </div>
                            <div className="mb-3">
                                <label for="productos" className="form-label">Dosis: </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerMasModal