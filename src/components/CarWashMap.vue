<script setup lang="ts">
import { onMounted } from 'vue'

let userLocation = <any>null

async function getUserGeolocation() {
  if (navigator.geolocation) {
    await new Promise((resolve: any, reject: any) => {
      navigator.geolocation.getCurrentPosition((position) => {
        userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        resolve()
      }, (error) => {
        console.error('Error al obtener la ubicación del usuario:', error)
        reject()
      })
    })
  } else {
    console.error('Geolocalización no es compatible con este navegador.')
  }
}

function callback(results: any, status: any) {
  // @ts-ignore
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      // Aquí puedes hacer algo con cada lugar encontrado, como mostrarlo en el mapa o en una lista
      console.log('DIRECCIÓN', place.vicinity, 'NAME', place.name);
    }
  }
}

let map = null

async function initMap(): Promise<void> {
  await getUserGeolocation()
  console.log('userLocation', userLocation)
  const position = userLocation || { lat: -8.1169477, lng: -79.021662 };
  
  // @ts-ignore
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  // @ts-ignore
  const { PlacesService } = await google.maps.importLibrary("places") as google.maps.PlacesLibrary;
  // @ts-ignore
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

  // The map, centered at Uluru
  // @ts-ignore
  map = new Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 5,
      center: position,
      mapId: 'DEMO_MAP_ID',
    }
  );

  // buscarLavaderosDeAutos
  // @ts-ignore
  var pyrmont = new google.maps.LatLng(-8.1169477,-79.021662);
  var request = {
    type: 'car_wash',
    location: pyrmont,
    radius: 5000
  };
  // @ts-ignore
  var service = new PlacesService(map);
  service.nearbySearch(request, callback);

  // The marker, positioned at Uluru
  new AdvancedMarkerView({
    map: map,
    position: position,
    title: 'Uluru'
  })
}

onMounted(async () => {
  await initMap()
})
</script>

<template>
  <div>
    <div id="map" style="height: 400px;"></div>
  </div>
</template>