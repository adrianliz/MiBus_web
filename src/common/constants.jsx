import { Icon } from "leaflet";
import { StyleSheet } from 'aphrodite';
import { bounceInLeft, fadeIn } from 'react-animations';

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
  busesMap: {
    width: '100%',
    height: '100vh'
  },
  bounceInLeft: {
    animationName: bounceInLeft,
    animationDuration: '1s'
  },
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});