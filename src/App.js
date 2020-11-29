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
        <h4 className="text-center bold mb-0">Urbanos de Teruel</h4>
      </Navbar>
      <NextBusesTable />
      <BusesMap center={MAP_CENTER} zoom={MAP_ZOOM} />
      <Footer />
    </Container>
  );
}

export default App;