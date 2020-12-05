import React from 'react';
import { MAP_CENTER, MAP_ZOOM } from './common/constants';
import NextBusesTable from './components/NextBusesTable';
import BusesMap from './components/BusesMap';
import Footer from './components/Footer';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';

const App = () => {
  return (
    <Container fluid>
      <Navbar>
        <NavbarBrand>
          <img
            alt="Urbanos de Teruel"
            src="../assets/logo.png"
            width="64"
            height="64"
            className="d-inline-block align-top"
          />
        </NavbarBrand>
        <Navbar.Collapse>
          <h1 className="text-center">Urbanos de Teruel</h1>
        </Navbar.Collapse>
      </Navbar>
      <NextBusesTable />
      <BusesMap center={MAP_CENTER} zoom={MAP_ZOOM} />
      <Footer />
    </Container>
  );
}

export default App;