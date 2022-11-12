import React from 'react';
import Menu from './Menu';
import Carrusel from './Carrusel';
import Footer from './Footer';
import Recientes from './Recientes';

function Principal() {
    return (
        <div>
            <Menu />
            <Carrusel />
            <div className='container'>
                <h1 className='text-center mt-5 mb-2'>Productos nuevos</h1>
                <div className="card-deck justify-content-center align-items-center m-5">
                    <div className="row">
                        <div className="col-md-4">
                            <Recientes />
                        </div>
                        <div className="col-md-4">
                            <Recientes />
                        </div>
                        <div className="col-md-4">
                            <Recientes />
                        </div>
                        <div className="col-md-4">
                            <Recientes />
                        </div>
                        <div className="col-md-4">
                            <Recientes />
                        </div>
                        <div className="col-md-4">
                            <Recientes />
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div className='container my-5 text-center'>
            <h1 className='mb-4 mt-5'>Contactanos</h1>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <img src="https://static1-es.millenium.gg/articles/0/32/50/0/@/150712-esmeralda-article_m-1.jpg" className='img-fluid' alt="" />
                    </div>

                    <div className='col-md-6 mt-5'>
                        <p>Info de la ubicacion</p>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Principal;