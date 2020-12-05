import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <Container className="text-left font-italic">
    <p className="d-inline-block">Origen de los datos:</p>
    <a className="ml-1"
       href="http://urbanosdeteruel.es/servicio-en-tiempo-real/">Urbanos de Teruel</a>
  </Container>
);

export default Footer;