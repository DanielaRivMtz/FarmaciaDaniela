import React from 'react'

function EditarProductoModal() {
    return (
        <div className="modal fade" id="EditarProductoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-warning">
                        <h5 className="modal-title" id="exampleModalLabel">Editar Medicamento</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label for="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" name="nombre"
                                    placeholder="Nombre del producto" />
                            </div>
                            <div className="mb-3">
                                <label for="precio" className="form-label">Precio</label>
                                <input type="text" className="form-control" id="precio" name="precio"
                                    placeholder="Precio del producto" required />
                            </div>
                            <div className="mb-3">
                                <label for="cantidad" className="form-label">Cantidad</label>
                                <input type="text" className="form-control" id="cantidad" name="cantidad"
                                    placeholder="Cantidad de producto que contiene" required />
                            </div>
                            <div className="mb-3">
                                <label for="dosis" className="form-label">Dosis</label>
                                <input type="text" className="form-control" id="dosis" name="dosis"
                                    placeholder="Gramaje del medicamento" required />
                            </div>
                            <div className="mb-3">
                                <label for="imagen" className="form-label">Imagen del producto</label>
                                <input className="form-control" type="text" id="imagen" name="imagen" required />
                            </div>
                            <input className="invisible" type="text" id="id" name="id" />

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-success" name="registrar">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarProductoModal;