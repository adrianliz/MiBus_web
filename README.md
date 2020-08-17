# MiBus Web
Web de `MiBus`

## Descripción del proyecto
`MiBus` pretende ser un software de ayuda para las personas de Teruel que 
quieran utilizar el transporte público, concretamente sus líneas de autobús

Este software tiene como objetivo permitir conocer en tiempo real la ubicación de los
autobuses de Teruel, así como de las distintas paradas

Además, permitirá conocer para cada una de las paradas, los autobuses de cada 
línea que van a pasar próximamente por ellas

## Estado
```diff
+ [En desarrollo]
```
Demo: [MiBus](mibus.cloudns.cl)

## Variables de entorno
* APP_PORT = APP_PORT

## Development Setup
```bash
npm i 
npm run dev
```

## Production Setup
```bash
docker-compose build
docker-compose up [-d]
```
