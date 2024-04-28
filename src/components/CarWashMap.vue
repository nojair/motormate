<script setup lang="ts">
import { ref, watchEffect  } from 'vue'

import { useUserStore } from '@/stores/user'

const mapLoading = ref(true)

const userStore = useUserStore()

let map = <any>null
let selectedMarker = <any>null
const infoWindows = <any>[]

function calcularDistancia(lat1: any, lon1: any, lat2: any, lon2: any) {
  const radioTierra = 6371; // Radio de la Tierra en kilómetros

  // Convertir grados a radianes
  const radianesLat1 = toRadians(lat1);
  const radianesLat2 = toRadians(lat2);
  const deltaLat = toRadians(lat2 - lat1);
  const deltaLon = toRadians(lon2 - lon1);

  // Calcular la distancia entre los dos puntos utilizando la fórmula de Haversine
  const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
            Math.cos(radianesLat1) * Math.cos(radianesLat2) *
            Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distancia = radioTierra * c;

  // Redondear la distancia a un decimal
  const distanciaRedondeada = Math.round(distancia * 10) / 10;

  return distanciaRedondeada;
}

// Función auxiliar para convertir grados a radianes
function toRadians(grados: any) {
  return grados * Math.PI / 180;
}

async function initMap(): Promise<void> {
  const { latitude: lat, longitude: lng } = userStore.coordinates
  const position = (lat && lng) ? { lat, lng } : { lat: null, lng: null };
  
  // @ts-ignore
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  // @ts-ignore
  const { PlacesService } = await google.maps.importLibrary("places") as google.maps.PlacesLibrary;
  // @ts-ignore
  const { AdvancedMarkerView, PinView } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

  // @ts-ignore
  map = new Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 15,
      center: position,
      mapId: 'f9e9a07281e43ce7'
    }
  );

  // buscarLavaderosDeAutos
  // @ts-ignore
  var pyrmont = new google.maps.LatLng(position.lat,position.lng);
  var request = {
    type: 'car_wash',
    location: pyrmont,
    radius: 5000
  }

  // @ts-ignore
  var service = new PlacesService(map);
  await service.nearbySearch(request, async (results: any, status: any) => {
  // @ts-ignore
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i]

        const faPinView = await new PinView({
            glyphColor: '#811411',
            background: '#e94335',
            borderColor: '#811411',
        })

        const faPinViewTwo = new PinView({
            glyphColor: '#811411',
            background: '#e94335',
            borderColor: '#811411',
            scale: 1.2
        })

        const marker = await new AdvancedMarkerView({
          map: map,
          position: place.geometry.location,
          content: faPinView.element,
          zIndex: i
        })

        //const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.geometry.location.lat},${place.geometry.location.lng}`;

        // @ts-ignore
        const infowindow = new google.maps.InfoWindow({
          content: `<ul class="py-2">
            <li class="flex flex-row items-center"><p class="mb-2"><span class="font-semibold">Taller:</span> ${place.name || ''} <span class="font-semibold">(${calcularDistancia(position.lat, position.lng, place.geometry.location.lat(), place.geometry.location.lng())} Km)</span></p></li>
            <li class="flex flex-row items-center">${place.business_status ? '<p class="mb-2"><span class="font-semibold">Estado:</span> Operacional</p>' : ''}</li>
            <li class="flex flex-row items-center">${place.isOpen ? '<p class="mb-2 font-semibold">Abierto ahora</p>' : ''}</li>
            <li class="flex flex-row items-center">${place.vicinity ? `<p class="mb-2"><span class="font-semibold">Dirección: </span>${place.vicinity}</p>` : ''}</li>
            <li class="flex flex-row items-center">${place.user_ratings_total ? `<p class="mb-2"><span class="font-semibold">Rating: </span>⭐ ${place.rating} (${place.user_ratings_total})</p>` : ''}</li>
            <li class="mt-2"><a class="text-sm text-blue-700 font-black rounded-md py-1" href="https://www.google.com/maps/place/?q=place_id:${place.place_id}" target="_blank" rel="noopener noreferrer">Abrir en Google Maps</a></li>
          </ul>`
        })

        marker.addListener('gmp-click', () => {
          if (selectedMarker?.zIndex != marker.zIndex) {
            if (selectedMarker) selectedMarker.content = faPinView.element
            marker.content = faPinViewTwo.element
            selectedMarker = marker
              
            infoWindows.forEach((infoWindow: any) => infoWindow.close())
            infowindow.open({
              anchor: marker,
              map
            })
            
            infoWindows.push(infowindow)
          }
        })

      }
    }
  })

  map.addListener('bounds_changed', async function() {
    // Obtener los límites actuales de la vista del mapa
    const bounds = map.getBounds();

    // Realizar una solicitud de lugares dentro de los límites actuales
    await service.nearbySearch({
      radius: 5000,
      bounds: bounds,
      location: pyrmont,
      type: 'car_wash' // Tipo de lugar que quieres buscar
    }, async (results: any, status: any) => {
    // @ts-ignore
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i]

          const faPinView = await new PinView({
              glyphColor: '#811411',
              background: '#e94335',
              borderColor: '#811411',
          })

          const faPinViewTwo = new PinView({
              glyphColor: '#811411',
              background: '#e94335',
              borderColor: '#811411',
              scale: 1.2
          })

          const marker = await new AdvancedMarkerView({
            map: map,
            position: place.geometry.location,
            content: faPinView.element,
            zIndex: i
          })

          //const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.geometry.location.lat},${place.geometry.location.lng}`;

          // @ts-ignore
          const infowindow = new google.maps.InfoWindow({
            content: `<ul class="py-2">
              <li class="flex flex-row items-center"><p class="mb-2"><span class="font-semibold">Taller:</span> ${place.name || ''} <span class="font-semibold">(${calcularDistancia(position.lat, position.lng, place.geometry.location.lat(), place.geometry.location.lng())} Km)</span></p></li>
              <li class="flex flex-row items-center">${place.business_status ? '<p class="mb-2"><span class="font-semibold">Estado:</span> Operacional</p>' : ''}</li>
              <li class="flex flex-row items-center">${place.isOpen ? '<p class="mb-2 font-semibold">Abierto ahora</p>' : ''}</li>
              <li class="flex flex-row items-center">${place.vicinity ? `<p class="mb-2"><span class="font-semibold">Dirección: </span>${place.vicinity}</p>` : ''}</li>
              <li class="flex flex-row items-center">${place.user_ratings_total ? `<p class="mb-2"><span class="font-semibold">Rating: </span>⭐ ${place.rating} (${place.user_ratings_total})</p>` : ''}</li>
              <li class="mt-2"><a class="text-sm text-blue-700 font-black rounded-md py-1" href="https://www.google.com/maps/place/?q=place_id:${place.place_id}" target="_blank" rel="noopener noreferrer">Abrir en Google Maps</a></li>
            </ul>`
          })

          marker.addListener('gmp-click', () => {
            if (selectedMarker?.zIndex != marker.zIndex) {
              if (selectedMarker) selectedMarker.content = faPinView.element
              marker.content = faPinViewTwo.element
              selectedMarker = marker
                
              infoWindows.forEach((infoWindow: any) => infoWindow.close())
              infowindow.open({
                anchor: marker,
                map
              })
              
              infoWindows.push(infowindow)
            }
          })

        }
      }
    });
  });
}

watchEffect(async () => {
  if (userStore.coordinates.latitude && userStore.coordinates.longitude) {
    await initMap()
    mapLoading.value = false
  }
})
</script>

<template>
  <div class="px-5">
    <div v-if="mapLoading" class="relative flex justify-center items-center w-full h-96 text-lg font-bold text-gray-600">Cargando el mapa...</div>
    <div id="map" class="h-[400px]"></div>
  </div>
</template>