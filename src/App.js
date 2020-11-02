import React from 'react';
import { MAP_CENTER, MAP_ZOOM } from './common/constants';
import NextBusesTable from './components/NextBusesTable';
import BusesMap from './components/BusesMap';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';

const App = () => {
  return (
    <Container className="bg-light" fluid>
      <Navbar expand>
        <NavbarBrand>
          <img
            alt="logo"
            src="../assets/logo.png"
            width="64"
            height="64"
            className="d-inline-block align-top"
          />
        </NavbarBrand>
        <NavbarBrand>
          <h4 className="mb-0">MiBus | Urbanos de Teruel</h4> 
        </NavbarBrand>
      </Navbar>
      <NextBusesTable />
      <BusesMap center={MAP_CENTER} zoom={MAP_ZOOM} />
    </Container>
  );
}

export default App; 