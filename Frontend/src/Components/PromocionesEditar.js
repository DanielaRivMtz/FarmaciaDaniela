import React from 'react';
import NuevoPromoModal from './NuevoPromoModal';
import PromoEditable from './PromoEditable';
import Menu from './Menu';
import Footer from './Footer';

function PromocionesEditar() {
    return (
        <div>
            <Menu />
            <div className="container">
                <h1 className="text-center mt-5 ">Promociones</h1>
                <button type="button" class="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target={"#NuevoPromoModal"}>Agregar Promoción</button>
                <NuevoPromoModal />

                <div className="card-deck justify-content-center align-items-center m-5">
                    <div className="row">
                        <div className="col-md-6">
                            <PromoEditable />
                        </div>
                        <div className="col-md-6">
                            <PromoEditable />
                        </div>
                        <div className="col-md-6">
                            <PromoEditable />
                        </div>
                        <div className="col-md-6">
                            <PromoEditable />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default PromocionesEditar