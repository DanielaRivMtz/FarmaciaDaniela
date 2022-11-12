import React from 'react'

function EliminarPromoModal() {
  return (
    <div className="modal fade" id="EliminarPromoModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-danger">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Aviso</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ¿Desea eliminar esta promoción?
                            </div>
                            <div className="modal-footer">
                                <form>
                                    <input type="hidden" id="id" name="id"/>
                                    <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="submit" className="btn btn-danger" name="eliminar">Eliminar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default EliminarPromoModal