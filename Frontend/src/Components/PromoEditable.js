import React from 'react';
import EditarPromoModal from './EditarPromoModal';
import EliminarPromoModal from './EliminarPromoModal';

function PromoEditable() {
    return (
        <div className="card mb-3">
            <img src="https://www.quironprevencion.com/blogs/es/prevenidos/entendiendo-mejor-medicina-trabajo.ficheros/44045-medicinatrabajo848.jpg?width=848&height=418" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="container mb-3">
                <button className="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target={"#EditarPromoModal"}>Editar</button>
                <button className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target={"#EliminarPromoModal"}>Eliminar</button>

                <EditarPromoModal />
                <EliminarPromoModal />

            </div>
        </div>
    );
}

export default PromoEditable;