import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
} from "react-bootstrap";

function LateralMenu() {
  return (
    <>
      <Navbar expand={false} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas>
            <Offcanvas.Header closeButton>
              
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Minha conta</Nav.Link>
                <Nav.Link href="#action2">Privacidade</Nav.Link>
                <Nav.Link href="#action2">Ajuda</Nav.Link>
                <Nav.Link href="#action2">Sair</Nav.Link>
               
              </Nav>
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default LateralMenu;
