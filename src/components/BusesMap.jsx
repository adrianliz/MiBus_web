import React from 'react';
import api from '../api/api';
import { styles, STOP_ICON, BUS_ICON } from '../common/constants';
import { MapContainer, Marker, Tooltip, TileLayer } from 'react-leaflet';
import { Container, Row, Col } from 'react-bootstrap';
import { css } from 'aphrodite';

class BusesMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stops: [],
      buses: []
    };
  }

  componentDidMount() {
    this.refreshMarkers();

    this.timerId = setInterval(() => {
      this.refreshMarkers();
    }, process.env.REACT_APP_REFRESH_MARKERS);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  async refreshMarkers() {
    try {
      const stops = await api.getStops();
      const buses = await api.getBuses();

      this.setState({ stops, buses });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <Container>
        <Col>
          <Row className="justify-content-center text-center m-5">
            <div className={`display-4 ${css(styles.bounceInLeft)}`}>Situación actual</div>
          </Row>
          <Row>
            <MapContainer className={css(styles.busesMap)} center={this.props.center} zoom={this.props.zoom} >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />

              {this.state.buses.map((bus) => (
                <Marker key={bus.carNumber + bus.busLine} position={bus.position} icon={BUS_ICON}>
                  <Tooltip className="popup" direction="top">
                    <p><b>Bus: </b>{`${bus.carNumber} ${bus.busLine}`}</p>
                    <p><b>Anterior parada: </b>{bus.previousStop}</p>
                    <p><b>Próxima parada: </b>{bus.nextStop}</p>
                  </Tooltip>
                </Marker>
              ))}

              {this.state.stops.map((stop) => (
                <Marker key={stop.id} position={stop.position} icon={STOP_ICON}>
                  <Tooltip className="popup" direction="top">
                    <p>{stop.name}</p>
                  </Tooltip>
                </Marker>
              ))}
            </MapContainer>
          </Row>
        </Col>
      </Container>
    );
  }
}

export default BusesMap;