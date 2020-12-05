import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';

const Loading = (props) => (
  <Container className="text-center mx-auto">
    <Row>
      <Spinner role="status" animation="grow" className="bg-white mx-auto">
        <span className="sr-only">{props.text}</span>
      </Spinner>
    </Row>
  </Container>
);

export default Loading;