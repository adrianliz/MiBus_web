# MiBus Web
Web de `MiBus` usando React

## Descripción del proyecto
`MiBus` pretende ser un software de ayuda para las personas de Teruel que
quieran utilizar el transporte público, concretamente sus líneas de autobús

Este software tiene como objetivo permitir conocer en tiempo real la ubicación de los
autobuses de Teruel, así como de las distintas paradas

Además, permitirá conocer para cada una de las paradas, los autobuses de cada
línea que van a pasar próximamente por ellas

## Estado
```diff
- [Finalizado]
```
MVP: [MiBus](http://www.mibusteruel.es/)

## Variables de entorno
* REACT_APP_MIBUS_API = REACT_APP_MIBUS_API
* REACT_APP_REFRESH_NEXT_BUSES = REACT_APP_REFRESH_NEXT_BUSES
* REACT_APP_REFRESH_MARKERS = REACT_APP_REFRESH_MARKERS
* APP_PORT = APP_PORT  *Nota: Solo es necesaria en un entorno de producción con Docker*

## Development Setup
```bash
npm i
npm start
```

## Production Setup
```bash
docker-compose build
docker-compose up [-d]
```
