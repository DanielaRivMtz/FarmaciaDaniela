import React from 'react';
import Promo from './Promo';
import MenuEdicion from './MenuEdicion';
import Footer from './Footer';

function Promociones() {
  return (
    <div>
            <MenuEdicion />
            <div className="container">
                <h1 className="text-center mt-5 ">Promociones</h1>

                <div className="card-deck justify-content-center align-items-center my-5">
                    <div className="row">
                        <div className="col-md-6">
                            <Promo />
                        </div>
                        <div className="col-md-6">
                            <Promo />
                        </div>
                        <div className="col-md-6">
                            <Promo />
                        </div>
                        <div className="col-md-6">
                            <Promo />
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
  );
}

export default Promociones