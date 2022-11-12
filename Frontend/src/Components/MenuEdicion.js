import React from 'react';

function MenuEdicion() {
    return (
        <div className="Menu">

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src="https://cdn-icons-png.flaticon.com/512/822/822143.png" width='30' height='30' alt='logofarmaciadaniela' />{" "} Farmacia "Daniela"</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#!">Medicamentos</Nav.Link>
                            <Nav.Link href="#!">Promociones</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default MenuEdicion;