import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <Container className="text-left font-italic">
    <p className="mb-0 text-secondary">Origen de los datos:
      <a className="ml-1" href="http://urbanosdeteruel.es/servicio-en-tiempo-real/">Urbanos de Teruel</a>
    </p>
  </Container>
);

export default Footer;