import { Icon } from "leaflet";
import { StyleSheet } from 'aphrodite';
import { pulse, bounceInLeft } from 'react-animations';

export const NEXT_BUSES_COLS = ["Parada", "Bus", "Línea"];

export const MAP_CENTER = [40.3456000, -1.1064600];
export const MAP_ZOOM = 15;

export const STOP_ICON = new Icon({
  iconUrl: "/assets/stop.png",
  iconSize: [30, 30]
});

export const BUS_ICON = new Icon({
  iconUrl: "/assets/bus.png",
  iconSize: [30, 30]
});

export const styles = StyleSheet.create({
  leafletContainer: {
    width: '100%',
    height: '100vh'
  },
  pulse: {
    animationName: pulse,
    animationDuration: '1s'
  },
  bounceInLeft: {
    animationName: bounceInLeft,
    animationDuration: '1s'
  }
});