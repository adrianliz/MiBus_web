import React from 'react';
import api from '../api/api';
import NextBusesRow from './NextBusesRow';
import NextBusesHead from './NextBusesHead';
import Loading from './Loading';
import { styles } from '../common/constants';
import { Container, Table } from 'react-bootstrap';
import { css } from 'aphrodite';

class NextBusesTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingNextBuses: true,
      nextBuses: []
    }
  }

  componentDidMount() {
    this.refreshNextBuses();

    this.timerId = setInterval(() => {
      this.setState({loadingNextBuses: true});
      this.refreshNextBuses();
    }, process.env.REACT_APP_REFRESH_NEXT_BUSES);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  async refreshNextBuses() {
    try {
      const stops = await api.getStops();

      let refreshedNextBuses = [];
      for (const stop of stops) {
        const nextBusesStop = await api.getNextBusesStop(stop.id);

        for (const nextBusStop of nextBusesStop) {
          refreshedNextBuses.push({
            "stopName": stop.name, 
            "carNumber": nextBusStop.carNumber, 
            "busLine": nextBusStop.busLine
          });
        }
      }
      
      this.setState({ loadingNextBuses: false, nextBuses: refreshedNextBuses });
    } catch (err) {
      console.error(err);
    }
  }

  getColNames = (() => {
    return Object.keys(this.state.nextBuses[0]);
  });

  render() {
    return (
      <Container>
        <h1 className={`mb-5 display-4 text-center ${css(styles.pulse)}`}>Próximos autobuses</h1>
        {this.state.loadingNextBuses
          ? <Loading text="Loading.." />
          : 
            <Table className={`text-center ${css(styles.bounceInLeft)}`} responsive striped 
                   bordered hover variant="dark">
              <NextBusesHead />
              <tbody>
                {this.state.nextBuses.map((nextBus, index) => 
                  <NextBusesRow key={index} colNames={this.getColNames()} bus={nextBus} />)}
              </tbody>             
            </Table>
        }
      </Container>
    );
  }
}

export default NextBusesTable;