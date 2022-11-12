import React from 'react'

function EditarPromoModal() {
  return (
    <div className="modal fade" id="EditarPromoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-warning">
                        <h5 className="modal-title" id="exampleModalLabel">Editar Promoción</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="mb-3">
                                <label for="titulo" className="form-label">Título</label>
                                <input type="text" className="form-control" id="titulo" name="titulo"
                                    placeholder="Título de la promoción" />
                            </div>
                            <div class="mb-3">
                                <label for="descripcion" className="form-label">Descripción</label>
                                <textarea className="form-control" id="descripcion" rows="3" name="descripcion"
                                    placeholder="Descripcion de la promoción"></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="productos" className="form-label">Productos</label>
                                <input type="text" className="form-control" id="productos" name="productos"
                                    placeholder="Productos que participan en la promoción" required />
                            </div>
                            <div className="mb-3">
                                <label for="fecha" className="form-label">Fecha</label>
                                <input type="text" className="form-control" id="fecha" name="fecha"
                                    placeholder="Fecha de termino de la promoción" required />
                            </div>
                            <div className="mb-3">
                                <label for="banner" className="form-label">Imagen de la promoción</label>
                                <input className="form-control" type="text" id="banner" name="banner" required />
                            </div>

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

export default EditarPromoModal