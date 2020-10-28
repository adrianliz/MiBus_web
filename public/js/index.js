"use strict"

let map
let markers = []

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.3456000, lng: -1.1064600 },
    zoom: 15
  })

  addBusesMarkers()
  addBusStopsMakers()
  getNextBusesStops()

  setInterval(() => {
    removeBusesMarkers()
    addBusesMarkers()
  }, 5000)

  setInterval(() => {
    getNextBusesStops()
  }, 30000)
}

function addBusesMarkers() {
  fetch("http://130.61.121.123:8000/buses")
  .then(res => {
    return res.json()
  })
  .then(buses => {
    parseBuses(buses)
  })
  .catch(err => console.log(err))
}

function parseBuses(buses) {
  for (let bus of buses) {
    const marker = new google.maps.Marker({
      position: { lat: bus.position.lat, lng: bus.position.lon },
      map: map,
      title: bus.carNumber.toString(),
      icon: './img/bus.png'
    })

    const infowindow = new google.maps.InfoWindow({
      content: `<div><b>Bus:</b> ${bus.carNumber}<div>
                <div><b>Line:</b> ${bus.busLine}<div>
                <div><b>Previous stop:</b> ${bus.previousStop}<div>
                <div><b>Next stop:</b> ${bus.nextStop}<div>`
    })

    marker.addListener('click', function () {
      infowindow.open(map, marker);
    })

    markers.push(marker)
  }
}

function removeBusesMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null)
  }

  markers = []
}

function addBusStopsMakers() {
  fetch("http://130.61.121.123:8000/stops")
    .then(res => {
      return res.json()
    })
    .then(busStops => {
      parseBusStops(busStops)
    })
    .catch(err => console.log(err))
}

function parseBusStops(busStops) {
  for (let busStop of busStops) {
    const marker = new google.maps.Marker({
      position: { lat: parseFloat(busStop.position.lat), lng: parseFloat(busStop.position.lon) },
      map: map,
      title: busStop.name,
      icon: './img/busStop.png'
    })

    marker.addListener('click', function () {
      infowindow.open(map, marker)
    })  

    let infowindow = new google.maps.InfoWindow({
      content: `<div><b>Stop:</b> ${busStop.name}<div>`
    })
  }
}

async function getNextBusesStops() {
  const res1 = await fetch(`http://130.61.121.123:8000/stops`)
  const busStops = await res1.json()

  const tbody = document.getElementById('nextBuses').getElementsByTagName('tbody')[0]
  tbody.innerHTML = ''
  
  for (let busStop of busStops) {
    const res2 = await fetch(`http://130.61.121.123:8000/buses/stop/${busStop.id}`)
    const nextBuses = await res2.json()

    for (let nextBus of nextBuses) {
      let row = tbody.insertRow()
      let cellStop = row.insertCell()
      let cellBus = row.insertCell()

      cellStop.innerHTML = busStop.name
      cellBus.innerHTML = nextBus.carNumber + " " + nextBus.busLine
    }
  } 
}