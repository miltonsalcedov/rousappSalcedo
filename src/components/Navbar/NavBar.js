import React from "react";
import {Button,Container,Form,FormControl,Nav,Navbar,NavDropdown,} from "react-bootstrap";
import logo from "../../assets/logorous.png";
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget'




const NavBar = () => {
  return (
    <Navbar style={{ backgroundColor: "#fcd5ce" }} expand="lg">
      <Container fluid>
        <img className="logo" src={logo} />
        <Navbar.Brand href="#" >Rous beauty</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Accesorios</Nav.Link>
            <NavDropdown title="Rostro" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Limpiadores Faciales
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Bases</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Bucar"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{ backgroundColor: "#e29578" }} variant="">
              Buscar
            </Button>
          </Form>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
