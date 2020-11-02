import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Loading = (props) => (
  <Container className="text-center mx-auto">
    <Spinner animation="border" variant="primary" className="mx-auto">
      <span className="sr-only">{props.text}</span>
    </Spinner>
  </Container>
);

export default Loading;