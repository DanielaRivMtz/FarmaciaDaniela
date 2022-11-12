import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
    return (
        <div className="Carrusel">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "10%" }}
                        src="https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/desarrollo-medicamento.jpg.webp?itok=8gYRCM-g"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "10%" }}
                        src="https://www.farmaceuticonline.com/wp-content/uploads/2019/07/medicament-que-es.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "10%" }}
                        src="https://d2go4np9frzvva.cloudfront.net/s3fs-public/GRA-Como-reconocer-un-medicamento-de-calidad.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carrusel;
