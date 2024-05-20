import { CarPlaceKeys, type CarServicesOptions } from "@/types/cars";

export const CAR_PLACES: CarServicesOptions[] = [
  { label: "Lavaderos de autos", key: CarPlaceKeys.CarWash },
  { label: "Cocheras", key: CarPlaceKeys.Parking },
  { label: "Talleres de reparación", key: CarPlaceKeys.CarRepair },
  { label: "Gasolineras", key: CarPlaceKeys.GasStation },
  { label: "Alquiler de autos", key: CarPlaceKeys.CarRental },
  { label: "Concesionario de autos", key: CarPlaceKeys.CarDealer },
];

const MAP_ID_FROM_GOOGLE_CLOUD = 'f9e9a07281e43ce7'
const DEFAULT_RADIUS = 5000
const DEFAULT_ZOOM = 15

let map = <any>null
let selectedMarker = <any>null
const infoWindows = <any>[]

function fromGradesToRadians(grades: any) {
  return grades * Math.PI / 180;
}

function getKilometersBetweenTwoLocations(locationA: any, locationB: any) {
  const radioTierra = 6371; // Earth radius in kilometers

  const radiansLatA = fromGradesToRadians(locationA.lat);
  const radiansLatB = fromGradesToRadians(locationB.lat);
  const deltaLat = fromGradesToRadians(locationB.lat - locationA.lat);
  const deltaLng = fromGradesToRadians(locationB.lng - locationA.lng);

  // get kilometers between points A and B using Haversine formule
  const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(radiansLatA) * Math.cos(radiansLatB) *
    Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const kilometers = radioTierra * c;

  const roundedDistance = Math.round(kilometers * 10) / 10;

  return roundedDistance;
}

async function getPlacesForMap(type: CarPlaceKeys, selectedMapCenter: any, dependencies: any, bounds?: any) {
  await dependencies.placesService?.nearbySearch({
    radius: DEFAULT_RADIUS,
    bounds,
    location: selectedMapCenter,
    type
  }, async (results: any, status: any) => {
    // @ts-ignore
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var placeIndex = 0; placeIndex < results.length; placeIndex++) {
        const place = results[placeIndex]
        const placeLocation = place.geometry.location
        const marker = await new dependencies.AdvancedMarkerView({
          map: dependencies.map,
          position: placeLocation,
          content: dependencies.pinForCarWash.element,
          zIndex: placeIndex
        })

        const placeCoordinates = { lat: placeLocation.lat(), lng: placeLocation.lng() }
        const mapCenterCoodinates = { lat: selectedMapCenter.lat(), lng: selectedMapCenter.lng() }
        // @ts-ignore
        const infowindow = new google.maps.InfoWindow({
          content: `
            <div class="p-4">
              <ul class="space-y-2">
                <li class="flex flex-row items-center">
                  <p class="mb-0 text-[17px]"> ${place.name || ''} <span class="font-semibold">(${getKilometersBetweenTwoLocations(mapCenterCoodinates, placeCoordinates)} Km)</span></p>
                </li>
                <li class="flex flex-row items-center">
                  ${place.business_status ? '<p class="mb-0 text-green-600"><span class="font-semibold">Estado:</span> Operacional</p>' : ''}
                </li>
                <li class="flex flex-row items-center">
                  ${place.isOpen ? '<p class="mb-0 text-green-600 font-semibold">Abierto ahora</p>' : ''}
                </li>
                <li class="flex flex-row items-center">
                  ${place.vicinity ? `<p class="mb-0"><span class="font-semibold">Dirección: </span>${place.vicinity}</p>` : ''}
                </li>
                <li class="flex flex-row items-center">
                  ${place.user_ratings_total ? `<p class="mb-0"><span class="font-semibold">Rating: </span>⭐ ${place.rating} (${place.user_ratings_total})</p>` : ''}
                </li>
                <li>
                  <a class="text-sm text-blue-700 font-semibold rounded-md py-2 px-4 bg-blue-100 hover:bg-blue-200 transition-colors block text-center" href="https://www.google.com/maps/place/?q=place_id:${place.place_id}" target="_blank" rel="noopener noreferrer">
                    Abrir en Google Maps
                  </a>
                </li>
              </ul>
            </div>
          `
        });


        marker.addListener('gmp-click', () => {
          if (selectedMarker?.zIndex != marker.zIndex) {
            if (selectedMarker) selectedMarker.content = dependencies.pinForCarWash.element
            marker.content = dependencies.pinForSelectedCarWash.element
            selectedMarker = marker

            infoWindows.forEach((infoWindow: any) => {
              return infoWindow.close()
            })
            infowindow.open({
              anchor: marker,
              map: dependencies.map
            })

            infoWindows.push(infowindow)
          }
        })

      }
    }
  });
}

export async function initMap({ type, lat, lng }: { type: CarPlaceKeys, lat: any, lng: any }): Promise<void> {
  // @ts-ignore
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

  // @ts-ignore
  const { PlacesService } = await google.maps.importLibrary("places") as google.maps.PlacesLibrary;
  // @ts-ignore
  const { AdvancedMarkerView, PinView } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

  // @ts-ignore
  const selectedMapCenter = new google.maps.LatLng(lat, lng);

  // @ts-ignore
  map = new Map(document.getElementById('map') as HTMLElement, {
    zoom: DEFAULT_ZOOM,
    center: selectedMapCenter,
    mapId: MAP_ID_FROM_GOOGLE_CLOUD // map ID from google cloud
  });

  const pinForCarWash = await new PinView({
    glyphColor: '#811411',
    background: '#e94335',
    borderColor: '#811411',
  })

  const pinForSelectedCarWash = new PinView({
    glyphColor: '#811411',
    background: '#e94335',
    borderColor: '#811411',
    scale: 1.2
  })

  // @ts-ignore
  const placesService = new PlacesService(map);

  const dependencies = {
    map,
    placesService,
    AdvancedMarkerView,
    pinForCarWash,
    pinForSelectedCarWash
  }

  await getPlacesForMap(type, selectedMapCenter, dependencies);

  map.addListener('bounds_changed', async function () {
    // render map with new bounds
    const bounds = map.getBounds();
    await getPlacesForMap(selectedMapCenter, dependencies, bounds);
  });
}
