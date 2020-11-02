import React from 'react';
import api from '../api/api';
import { styles, STOP_ICON, BUS_ICON } from '../common/constants';
import { MapContainer, Marker, Tooltip, TileLayer } from 'react-leaflet';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
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
      <Container className="mt-5">
        <h1 className={`mb-5 display-4 text-center ${css(styles.pulse)}`}>Situación actual</h1>
        <MapContainer className={css(styles.leafletContainer)} center={this.props.center} zoom={this.props.zoom} >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {this.state.buses.map((bus) => (
            <Marker key={bus.carNumber + bus.busLine} position={bus.position} icon={BUS_ICON}>
              <Tooltip direction="top">
                <Container>
                  <ListGroup horizontal>
                    <ListGroupItem>
                      <b>Bus: </b><p>{`${bus.carNumber} ${bus.busLine}`}</p>
                    </ListGroupItem>
                    <ListGroupItem>
                      <b>Anterior parada: </b><p>{bus.previousStop}</p>
                    </ListGroupItem>
                    <ListGroupItem>
                      <b>Próxima parada: </b><p>{bus.nextStop}</p>
                    </ListGroupItem>
                  </ListGroup>
                </Container>
              </Tooltip>
            </Marker>
          ))}

          {this.state.stops.map((stop) => (
            <Marker key={stop.id} position={stop.position} icon={STOP_ICON}>
              <Tooltip direction="top">
                <p>{stop.name}</p>
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </Container>
    );
  }
}

export default BusesMap;