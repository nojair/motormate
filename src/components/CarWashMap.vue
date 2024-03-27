<script setup lang="ts">
import { watchEffect  } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

let map = <any>null

async function initMap(): Promise<void> {
  const { latitude: lat, longitude: lng } = userStore.coordinates
  const position = (lat && lng) ? { lat, lng } : { lat: -8.1169477, lng: -79.021662 };
  
  // @ts-ignore
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  // @ts-ignore
  const { PlacesService } = await google.maps.importLibrary("places") as google.maps.PlacesLibrary;
  // @ts-ignore
  const { Marker } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

  // The map, centered at Uluru
  // @ts-ignore
  map = new Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 12,
      center: position
    }
  );

  // buscarLavaderosDeAutos
  // @ts-ignore
  var pyrmont = new google.maps.LatLng(position.lat,position.lng);
  var request = {
    type: 'car_wash',
    location: pyrmont,
    radius: 5000
  };
  // @ts-ignore
  var service = new PlacesService(map);
  await service.nearbySearch(request, async (results: any, status: any) => {
  // @ts-ignore
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        // Aquí puedes hacer algo con cada lugar encontrado, como mostrarlo en el mapa o en una lista
        // console.log('DIRECCIÓN', place.vicinity, 'NAME', place.name);
        await new Marker({
          map: map,
          position: place.geometry.location
        })
      }
    }
  })
}

watchEffect(async () => {
  if (userStore.location.postal_code) {
    await initMap()
  }
})
</script>

<template>
  <div>
    <div id="map" style="height: 400px;"></div>
  </div>
</template>