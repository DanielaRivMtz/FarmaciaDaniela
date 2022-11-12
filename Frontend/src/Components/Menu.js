import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
    return (
        <div className="Menu">

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src="https://cdn-icons-png.flaticon.com/512/822/822143.png" width='30' height='30' alt='logofarmaciadaniela' />Farmacia "Daniela"</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Inicio</Nav.Link>
                            <Nav.Link href="#pricing">Productos</Nav.Link>
                            <Nav.Link href="#">Promociones</Nav.Link>
                            <Nav.Link href="#">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Menu;
